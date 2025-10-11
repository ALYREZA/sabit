import { useColor } from "@/hooks";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { Text } from "./typography";
export interface InputProps extends TextInputProps {
  label?: string;
}
const AnimatedText = Animated.createAnimatedComponent(Text);
export function Input(props: InputProps) {
  const { label, ...rest } = props;
  const backgroundColor = useColor("background");
  const secondaryContainerColor = useColor("secondaryContainer");
  const borderColor = useColor("border");
  const textColor = useColor("text");
  return (
    <View style={styles.container}>
      {label && (
        <AnimatedText
          entering={FadeIn.duration(600)}
          color="gray"
          style={[styles.label, { backgroundColor, color: textColor }]}
        >
          {label}
        </AnimatedText>
      )}
      <TextInput
        {...rest}
        style={[
          styles.input,
          {
            backgroundColor: secondaryContainerColor,
            borderColor,
            color: textColor,
          },
        ]}
      />
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
    zIndex: 110,
  },
  input: {
    zIndex: 100,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    minWidth: 328,
  },
});
