import { RenderIf } from "@/components/RenderIf";
import { Text } from "@/kits/typography/Text";
import { ButtonVariant, Colors, ColorTheme } from "@/utils/Colors";
import { ActivityIndicator, View, ViewStyle } from "react-native";
import {
  RectButtonProps,
  RectButton as RNButton,
} from "react-native-gesture-handler";

export interface ButtonProps extends Omit<RectButtonProps, "style"> {
  children: React.ReactNode;
  theme?: ColorTheme;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: ViewStyle;
  size?: "small" | "medium" | "large";
  loading?: boolean;
}

export function Button({
  children,
  theme = "primary",
  variant = "filled",
  disabled = false,
  style,
  size = "medium",
  loading = false,
  ...props
}: ButtonProps) {
  const buttonStyles = getButtonStyles(theme, variant, disabled, size);
  const textColor = getTextColor(theme, variant, disabled);

  return (
    <RNButton
      {...props}
      style={[buttonStyles.button, style]}
      enabled={!disabled}
    >
      <View accessible accessibilityRole="button">
        <RenderIf
          condition={!loading}
          fallback={<ActivityIndicator size="small" color={textColor} />}
        >
          <Text color={textColor}>{children}</Text>
        </RenderIf>
      </View>
    </RNButton>
  );
}

function getButtonStyles(
  theme: ColorTheme,
  variant: ButtonVariant,
  disabled: boolean,
  size: "small" | "medium" | "large",
) {
  const baseStyles = {
    borderRadius: 16,
    fontSize: 14,
    alignSelf: "center" as const,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    gap: 8,
  };

  const sizeStyles = {
    small: {
      height: 28,
      paddingHorizontal: 16,
      paddingVertical: 4,
    },
    medium: {
      height: 34,
      paddingHorizontal: 24,
      paddingVertical: 6,
    },
    large: {
      height: 44,
      paddingHorizontal: 32,
      paddingVertical: 8,
    },
  };

  let buttonStyle: ViewStyle = {
    ...baseStyles,
    ...sizeStyles[size],
  };

  if (disabled) {
    // Disabled state styles
    switch (variant) {
      case "filled":
        buttonStyle.backgroundColor = Colors.disabled.background;
        break;
      case "outlined":
        buttonStyle.backgroundColor = Colors.disabled.backgroundLighter;
        buttonStyle.borderWidth = 1;
        buttonStyle.borderColor = Colors.disabled.border;
        break;
      case "text":
        buttonStyle.backgroundColor = "transparent";
        break;
    }
  } else {
    // Active state styles
    switch (variant) {
      case "filled":
        if (theme === "primary") {
          buttonStyle.backgroundColor = Colors.primary.main;
        } else if (theme === "secondary") {
          buttonStyle.backgroundColor = Colors.primary.light;
        }
        break;
      case "outlined":
        buttonStyle.backgroundColor = Colors.secondary.main;
        buttonStyle.borderWidth = 1;
        buttonStyle.borderColor =
          theme === "primary" ? Colors.primary.main : Colors.primary.light;
        break;
      case "text":
        buttonStyle.backgroundColor = "transparent";
        break;
    }
  }

  return { button: buttonStyle };
}

function getTextColor(
  theme: ColorTheme,
  variant: ButtonVariant,
  disabled: boolean,
): "white" | "black" | "blue" | "gray" {
  if (disabled) {
    return "gray";
  }

  switch (variant) {
    case "filled":
      if (theme === "primary") {
        return "white";
      } else if (theme === "secondary") {
        return "blue";
      }
      return "white";
    case "outlined":
      if (theme === "primary") {
        return "blue";
      } else if (theme === "secondary") {
        return "blue";
      }
      return "blue";
    case "text":
      if (theme === "primary") {
        return "blue";
      } else if (theme === "secondary") {
        return "blue";
      }
      return "blue";
    default:
      return "white";
  }
}
