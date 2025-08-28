import { StyleSheet, TextProps } from "react-native";
import { Text } from "./Text";

interface HeadingProps extends TextProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({ level = 1, style, ...props }: HeadingProps) {
  const headingStyle = [
    styles.heading,
    styles[`h${level}` as keyof typeof styles],
    style,
  ];

  return <Text {...props} style={headingStyle} />;
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    color: "#000",
  },
  h1: {
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    fontSize: 28,
    lineHeight: 36,
  },
  h3: {
    fontSize: 24,
    lineHeight: 32,
  },
  h4: {
    fontSize: 20,
    lineHeight: 28,
  },
  h5: {
    fontSize: 18,
    lineHeight: 24,
  },
  h6: {
    fontSize: 16,
    lineHeight: 22,
  },
});
