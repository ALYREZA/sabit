import { useColor } from "@/hooks";
import { Colors } from "@/utils/Colors";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { Text } from "./typography";
interface InputProps extends TextInputProps {
  label?: string;
}
const AnimatedText = Animated.createAnimatedComponent(Text);
export function Input(props: InputProps) {
  const { label, ...rest } = props;
  const backgroundColor = useColor("background");
  return (
    <View style={styles.container}>
      {label && (
        <AnimatedText
          entering={FadeIn.duration(600)}
          color="gray"
          style={[styles.label, { backgroundColor }]}
        >
          {label}
        </AnimatedText>
      )}
      <TextInput {...rest} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    position: "relative",
  },
  label: {
    position: "absolute",
    top: -10,
    right: 8,
    fontSize: 10,
    paddingHorizontal: 2,
    color: "#11181C",
    zIndex: 110,
  },
  input: {
    zIndex: 100,
    borderWidth: 1,
    backgroundColor: Colors.secondary.main,
    borderColor: Colors.border.primary,
    padding: 10,
    borderRadius: 10,
    minWidth: 328,
  },
});
