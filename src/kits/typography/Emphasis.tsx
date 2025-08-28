import { StyleSheet, TextProps } from "react-native";
import { Text } from "./Text";

export function Strong({ style, ...props }: TextProps) {
  return <Text {...props} style={[styles.strong, style]} />;
}

export function Underline({ style, ...props }: TextProps) {
  return <Text {...props} style={[styles.underline, style]} />;
}

const styles = StyleSheet.create({
  strong: {
    fontWeight: "bold",
    fontSize: 16,
  },
  underline: {
    textDecorationLine: "underline",
    fontSize: 16,
  },
});
