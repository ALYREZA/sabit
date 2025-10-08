import { ExpoConfig } from "expo/config";

module.exports = (expoConfig: ExpoConfig) => ({
  name: "sabit",
  slug: "sabit",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "sabit",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
  },
  android: {
    package: "com.parslib.sabit",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
  },
  web: {
    bundler: "metro",
    output: "server",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    [
      "expo-sqlite",
      {
        enableFTS: true,
        useSQLCipher: true,

        android: {
          enableFTS: false,
          useSQLCipher: false,
        },
        ios: {
          customBuildFlags: [
            "-DSQLITE_ENABLE_DBSTAT_VTAB=1 -DSQLITE_ENABLE_SNAPSHOT=1",
          ],
        },
      },
    ],
    [
      "expo-font",
      {
        fonts: [
          "./assets/fonts/IRANSansWeb(FaNum)_Black.ttf",
          "./assets/fonts/IRANSansWeb(FaNum)_Bold.ttf",
          "./assets/fonts/IRANSansWeb(FaNum)_Light.ttf",
          "./assets/fonts/IRANSansWeb(FaNum)_Medium.ttf",
          "./assets/fonts/IRANSansWeb(FaNum)_UltraLight.ttf",
        ],
      },
    ],
    [
      "expo-secure-store",
      {
        configureAndroidBackup: true,
        faceIDPermission:
          "Allow $(PRODUCT_NAME) to access your Face ID biometric data.",
      },
    ],
    "expo-web-browser",
  ],
  extra: {
    eas: {
      projectId: "c2cd782a-55a5-461a-8980-2a2abbe2212c",
    },
  },
  experiments: {
    typedRoutes: true,
  },
});
