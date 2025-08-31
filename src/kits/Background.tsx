import { ReactNode } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Box } from "./Box";

type FlexAlignType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";
interface BackgroundProps {
  children: ReactNode;
  alignItems?: FlexAlignType | undefined;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  enabledKeyboardAwareScrollView?: boolean;
}

export function Background({
  children,
  alignItems,
  justifyContent,
  enabledKeyboardAwareScrollView = false,
}: BackgroundProps) {
  return (
    <Box
      px="5"
      gap="10"
      style={{ justifyContent, alignItems, flex: 1, height: "100%" }}
    >
      <KeyboardAwareScrollView
        enabled={enabledKeyboardAwareScrollView}
        ScrollViewComponent={ScrollView}
      >
        {children}
      </KeyboardAwareScrollView>
    </Box>
  );
}
