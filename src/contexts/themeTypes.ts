export type ThemeMode = "light" | "dark" | "system";
export type Theme = "light" | "dark";

export interface ThemeColors {
  // Background colors
  background: string;
  surface: string;
  surfaceVariant: string;

  card: string;
  // Text colors
  text: string;
  textSecondary: string;
  textTertiary: string;

  // Primary colors
  primary: string;
  primaryContainer: string;
  onPrimary: string;
  onPrimaryContainer: string;

  // Secondary colors
  secondary: string;
  secondaryContainer: string;
  onSecondary: string;
  onSecondaryContainer: string;

  // Error colors
  error: string;
  errorContainer: string;
  onError: string;
  onErrorContainer: string;

  // Border and divider colors
  border: string;
  divider: string;

  // Overlay colors
  overlay: string;
  shadow: string;
}

export interface ThemeData {
  colors: ThemeColors;
  isDark: boolean;
  mode: ThemeMode;
}

// Light theme colors
export const lightColors: ThemeColors = {
  background: "#FFFFFF",
  surface: "#F8F9FA",
  surfaceVariant: "#F1F3F4",

  text: "#1A1A1A",
  textSecondary: "#5F6368",
  textTertiary: "#9AA0A6",

  card: "#EFF2F5",
  primary: "#1976D2",
  primaryContainer: "#E3F2FD",
  onPrimary: "#FFFFFF",
  onPrimaryContainer: "#0D47A1",

  secondary: "#424242",
  secondaryContainer: "#F5F5F5",
  onSecondary: "#FFFFFF",
  onSecondaryContainer: "#212121",

  error: "#D32F2F",
  errorContainer: "#FFEBEE",
  onError: "#FFFFFF",
  onErrorContainer: "#B71C1C",

  border: "#E0E0E0",
  divider: "#E0E0E0",

  overlay: "rgba(0, 0, 0, 0.5)",
  shadow: "rgba(0, 0, 0, 0.1)",
};

// Dark theme colors
export const darkColors: ThemeColors = {
  background: "#121212",
  surface: "#1E1E1E",
  surfaceVariant: "#2D2D2D",

  text: "#FFFFFF",
  textSecondary: "#B0B0B0",
  textTertiary: "#808080",

  primary: "#90CAF9",
  primaryContainer: "#1976D2",
  onPrimary: "#000000",
  onPrimaryContainer: "#E3F2FD",

  card: "#1E1E1E",
  secondary: "#B0B0B0",
  secondaryContainer: "#424242",
  onSecondary: "#000000",
  onSecondaryContainer: "#F5F5F5",

  error: "#EF5350",
  errorContainer: "#D32F2F",
  onError: "#000000",
  onErrorContainer: "#FFEBEE",

  border: "#404040",
  divider: "#404040",

  overlay: "rgba(0, 0, 0, 0.7)",
  shadow: "rgba(0, 0, 0, 0.3)",
};

// Theme configuration
export const THEME_CONFIG = {
  storageKey: "@theme_mode",
  defaultMode: "system" as ThemeMode,
} as const;
