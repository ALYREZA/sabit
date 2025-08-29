import { Text } from "@/kits/typography/Text";
import { StyleSheet, View } from "react-native";
import {
  RectButton as RNButton,
  RectButtonProps,
} from "react-native-gesture-handler";

export function Button(props: RectButtonProps) {
  return (
    <RNButton {...props} style={styles.button}>
      <View accessible accessibilityRole="button">
        <Text color="white">{props.children}</Text>
      </View>
    </RNButton>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 34,
    borderRadius: 16,
    backgroundColor: "blue",
    paddingHorizontal: 24,
    paddingVertical: 6,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
