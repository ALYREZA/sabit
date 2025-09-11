import { useColor } from "@/hooks";
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
  paddingTop?: number;
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
  paddingTop,
  enabledKeyboardAwareScrollView = false,
}: BackgroundProps) {
  const backgroundColor = useColor("background");
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      enabled={enabledKeyboardAwareScrollView}
      ScrollViewComponent={ScrollView}
    >
      <Box
        gap="10"
        backgroundColor={backgroundColor}
        style={{
          justifyContent,
          alignItems,
          flex: 1,
          height: "100%",
          paddingTop,
        }}
      >
        {children}
      </Box>
    </KeyboardAwareScrollView>
  );
}
