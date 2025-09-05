import { ThemeProvider } from "@/hooks";
import Feather from "@expo/vector-icons/Feather";
import { Stack, useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";

const HeaderRight = (props: any) => {
  const { canGoBack, back } = useRouter();
  return (
    canGoBack() && (
      <Feather
        name="arrow-right"
        size={24}
        color={props.tintColor}
        onPress={back}
      />
    )
  );
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardProvider>
        <ThemeProvider>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "#F6F8FA",
              },
              headerTitle: "",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerBackButtonDisplayMode: "minimal",
              headerRight: HeaderRight,
            }}
          />
        </ThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
