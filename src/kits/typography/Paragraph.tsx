import { StyleSheet, TextProps } from "react-native";
import { Text } from "./Text";

export function Paragraph(props: TextProps) {
  return <Text {...props} style={styles.paragraph} />;
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 18,
    lineHeight: 24,
  },
});
