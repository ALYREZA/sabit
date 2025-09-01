import { Colors } from "@/utils/Colors";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input(props: TextInputProps) {
  return <TextInput {...props} style={styles.input} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: Colors.secondary.main,
    borderColor: Colors.border.primary,
    padding: 10,
    borderRadius: 10,
    minWidth: 328,
  },
});
