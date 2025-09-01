import { Text } from "@/kits/typography/Text";
import { Colors } from "@/utils/Colors";
import { Platform, StyleSheet, TextInputProps } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

interface CodeInputProps {
  value: string;
  setValue: (value: string) => void;
  cellCount?: number;
}

const CELL_COUNT = 6;
const autoComplete = Platform.select<TextInputProps["autoComplete"]>({
  android: "sms-otp",
  default: "one-time-code",
});

function CodeInput({
  value,
  setValue,
  cellCount = CELL_COUNT,
}: CodeInputProps) {
  const ref = useBlurOnFulfill({ value, cellCount });
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...codeFieldProps}
      value={value}
      onChangeText={setValue}
      cellCount={cellCount}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      autoComplete={autoComplete}
      testID="my-code-input"
      renderCell={({
        index,
        symbol,
        isFocused,
      }: {
        index: number;
        symbol: string;
        isFocused: boolean;
      }) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused && <Cursor />)}
        </Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 20, gap: 15 },
  cell: {
    width: 42,
    height: 48,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    backgroundColor: Colors.secondary.main,
    borderColor: Colors.border.primary,
    textAlign: "center",
    color: "#000",
    borderRadius: 4,
  },
  focusCell: {
    borderColor: "#F651E8",
  },
});

export default CodeInput;
