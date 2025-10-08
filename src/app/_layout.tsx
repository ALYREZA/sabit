import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { SplashScreenController } from "@/contexts/SplashScreenController";
import { ThemeProvider, useColor } from "@/hooks";
import TypesafeI18n from "@/i18n/i18n-react";
import { loadAllLocales } from "@/i18n/i18n-util.sync";
import "@/polyfill";
import { fonts, fontsAlternative } from "@/utils/fonts";
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

const RootNavigator = () => {
  const { token } = useAuth();
  const backgroundColor = useColor("secondaryContainer");

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
        headerBackVisible: false,
      }}
    >
      <Stack.Protected guard={!!token}>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={!token}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Screen name="(shared)" options={{ headerShown: false }} />
    </Stack>
  );
};

const Layout = () => {
  const [loaded, error] = useFonts({
    ...Feather.font,
    ...fonts,
    ...fontsAlternative,
  });

  useEffect(() => {
    loadAllLocales();
  }, []);

  // Debug: Log font loading status
  if (__DEV__) {
    console.log("Fonts loaded:", loaded);
    console.log("Font loading error:", error);
    console.log("Available fonts:", Object.keys(fonts));
  }

  if (error) {
    console.error("Font loading error:", error);
  }

  if (!loaded) {
    return <ActivityIndicator size="large" color="green" />;
  }

  return <RootNavigator />;
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardProvider>
        <ThemeProvider>
          <TypesafeI18n locale="fa">
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <SplashScreenController />
                <Layout />
              </AuthProvider>
            </QueryClientProvider>
          </TypesafeI18n>
        </ThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
