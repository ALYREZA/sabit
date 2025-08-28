import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

export function Background({ children }: { children: ReactNode }) {
  return <View style={styles.wrapper}>{children}</View>;
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
