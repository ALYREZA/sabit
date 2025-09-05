// Theme hooks
export { useTheme } from "../contexts/ThemeContext";
export { useDeviceDefaultTheme, useDeviceTheme } from "./useDeviceTheme";
export { useColor, useColors, useThemeColors } from "./useThemeColors";

// Theme types and constants
export { THEME_CONFIG, darkColors, lightColors } from "../contexts/themeTypes";
export type {
  Theme,
  ThemeColors,
  ThemeData,
  ThemeMode,
} from "../contexts/themeTypes";

// Theme provider
export { ThemeProvider } from "../contexts/ThemeContext";
