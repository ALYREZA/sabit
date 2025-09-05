import { useColorScheme } from "react-native";

/**
 * Hook to get the device's current theme preference
 * @returns The device's color scheme ('light', 'dark', or null if not available)
 */
export const useDeviceTheme = () => {
  const colorScheme = useColorScheme();

  return {
    deviceTheme: colorScheme as "light" | "dark" | null,
    isDarkMode: colorScheme === "dark",
    isLightMode: colorScheme === "light",
    isAvailable: colorScheme !== null,
  };
};

/**
 * Hook to get the device's default theme preference
 * This is useful when you want to know what the device prefers
 * regardless of the current app theme setting
 */
export const useDeviceDefaultTheme = () => {
  const { deviceTheme, isDarkMode, isLightMode, isAvailable } =
    useDeviceTheme();

  return {
    defaultTheme: deviceTheme,
    prefersDark: isDarkMode,
    prefersLight: isLightMode,
    hasThemePreference: isAvailable,
  };
};
