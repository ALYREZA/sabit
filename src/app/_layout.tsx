import { Stack } from "expo-router/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardProvider>
        <Stack
          screenOptions={{
            headerTitle: "",
            headerTitleAlign: "center",
          }}
        />
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
