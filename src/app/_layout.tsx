import { ThemeProvider, useColor } from "@/hooks";
import TypesafeI18n from "@/i18n/i18n-react";
import { loadAllLocales } from "@/i18n/i18n-util.sync";
import "@/polyfill";
import Feather from "@expo/vector-icons/Feather";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
const queryClient = new QueryClient();

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

const Layout = () => {
  const backgroundColor = useColor("secondaryContainer");
  const [loaded] = useFonts({
    ...Feather.font,
  });
  useEffect(() => {
    loadAllLocales();
  }, []);

  if (!loaded) {
    return <ActivityIndicator size="large" color="green" />;
  }
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor,
        },
        headerTitle: "",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerBackButtonDisplayMode: "minimal",
        headerRight: HeaderRight,
      }}
    >
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardProvider>
        <ThemeProvider>
          <TypesafeI18n locale="fa">
            <QueryClientProvider client={queryClient}>
              <Layout />
            </QueryClientProvider>
          </TypesafeI18n>
        </ThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
