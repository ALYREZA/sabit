import { Href, router } from "expo-router";
import { StyleSheet, TextProps } from "react-native";
import { Pressable } from "react-native-gesture-handler";
import { Text } from "./Text";

interface AnchorProps extends TextProps {
  href?: Href;
  onPress?: () => void;
}

export function Anchor({ href, onPress, style, ...props }: AnchorProps) {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <Text {...props} style={[styles.anchor, style]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  anchor: {
    color: "#007AFF",
    textDecorationLine: "underline",
    fontSize: 16,
  },
});
