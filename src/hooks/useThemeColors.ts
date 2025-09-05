import { useTheme } from "../contexts/ThemeContext";
import { darkColors, lightColors, ThemeColors } from "../contexts/themeTypes";

/**
 * Hook that provides the current theme colors and theme state
 * @returns Object containing colors, theme state, and theme management functions
 */
export const useThemeColors = () => {
  const { theme, themeMode, isDark, setThemeMode, toggleTheme } = useTheme();

  // Get the appropriate color palette based on current theme
  const colors: ThemeColors = isDark ? darkColors : lightColors;

  return {
    colors,
    theme,
    themeMode,
    isDark,
    setThemeMode,
    toggleTheme,
  };
};

/**
 * Hook that provides only the current theme colors
 * Useful when you only need colors and don't need theme management functions
 * @returns The current theme's color palette
 */
export const useColors = (): ThemeColors => {
  const { isDark } = useTheme();
  return isDark ? darkColors : lightColors;
};

/**
 * Hook that provides a specific color from the current theme
 * @param colorKey - The key of the color to retrieve
 * @returns The color value for the current theme
 */
export const useColor = <K extends keyof ThemeColors>(
  colorKey: K,
): ThemeColors[K] => {
  const colors = useColors();
  return colors[colorKey];
};
