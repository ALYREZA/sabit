import { useColors } from "@/hooks/useThemeColors";
import React from "react";
import { I18nManager, LayoutChangeEvent, ViewStyle } from "react-native";
import { Pressable } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Text } from "./typography";

export type SegmentItem = {
  label: string;
  value: string;
};

export interface SegmentedControlProps {
  segments: SegmentItem[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  style?: ViewStyle;
  rtl?: boolean;
}

export function SegmentedControl({
  segments,
  value,
  onChange,
  disabled = false,
  size = "md",
  style,
  rtl,
}: SegmentedControlProps) {
  const colors = useColors();
  const isRTL = rtl ?? I18nManager.isRTL;
  const [containerWidth, setContainerWidth] = React.useState(0);
  const selectedIndex = Math.max(
    0,
    segments.findIndex((s) => s.value === value),
  );
  const index = useSharedValue(selectedIndex);

  const heightBySize: Record<
    NonNullable<SegmentedControlProps["size"]>,
    number
  > = {
    sm: 28,
    md: 36,
    lg: 44,
  };

  const container: ViewStyle = {
    flexDirection: isRTL ? "row-reverse" : "row",
    backgroundColor: colors.background,
    borderRadius: 999,
    padding: 2,
    borderWidth: 1,
    borderColor: colors.divider,
    position: "relative",
  };

  const segBase: ViewStyle = {
    flex: 1,
    height: heightBySize[size],
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  };

  const onLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  React.useEffect(() => {
    const newIdx = Math.max(
      0,
      segments.findIndex((s) => s.value === value),
    );
    index.value = withTiming(newIdx, {
      duration: 250,
      easing: Easing.out(Easing.cubic),
    });
  }, [value, segments, index]);

  const segmentWidth = React.useMemo(() => {
    if (containerWidth <= 0 || segments.length === 0) return 0;
    return (containerWidth - 4) / segments.length; // 2px padding per side
  }, [containerWidth, segments.length]);

  const indicatorAnimatedStyle = useAnimatedStyle(() => {
    const reversedIndex = segments.length - 1 - index.value;
    const logicalIndex = isRTL ? reversedIndex : index.value;
    return {
      transform: [{ translateX: logicalIndex * segmentWidth }],
    };
  }, [segmentWidth, isRTL, segments.length]);

  return (
    <Animated.View onLayout={onLayout} style={[container, style]}>
      {segmentWidth > 0 && (
        <Animated.View
          pointerEvents="none"
          style={[
            {
              position: "absolute",
              top: 5,
              left: 0,
              height: heightBySize[size],
              width: segmentWidth,
              borderRadius: 999,
              backgroundColor: colors.primary,
            },
            indicatorAnimatedStyle,
          ]}
        />
      )}
      {segments.map((segment) => {
        const selected = segment.value === value;
        const segStyle: ViewStyle = [segBase] as unknown as ViewStyle;

        return (
          <Pressable
            key={segment.value}
            disabled={disabled}
            accessibilityRole="button"
            accessibilityState={{ disabled, selected }}
            onPress={() => onChange(segment.value)}
            style={segStyle}
          >
            <Text
              size={3}
              weight="medium"
              color={selected ? "white" : "gray"}
              style={{
                color: selected ? colors.onPrimary : colors.textTertiary,
              }}
              align="center"
            >
              {segment.label}
            </Text>
          </Pressable>
        );
      })}
    </Animated.View>
  );
}

export default SegmentedControl;
