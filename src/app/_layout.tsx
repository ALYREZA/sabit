import { ThemeProvider } from "@/hooks";
import TypesafeI18n from "@/i18n/i18n-react";
import { loadAllLocales } from "@/i18n/i18n-util.sync";
import "@/polyfill";
import Feather from "@expo/vector-icons/Feather";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
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

const Layout = () => {
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
          backgroundColor: "#F6F8FA",
        },
        headerTitle: "",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerBackButtonDisplayMode: "minimal",
        headerRight: HeaderRight,
      }}
    />
  );
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardProvider>
        <ThemeProvider>
          <TypesafeI18n locale="fa">
            <Layout />
          </TypesafeI18n>
        </ThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
