import { Text as RNText, StyleSheet, TextProps } from "react-native";

export function Text(props: TextProps) {
  return <RNText {...props} style={styles.text} />;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
