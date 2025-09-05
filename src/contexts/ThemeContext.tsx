import Storage from "expo-sqlite/kv-store";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  theme: "light" | "dark";
  themeMode: ThemeMode;
  isDark: boolean;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "@theme_mode";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const deviceColorScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>("system");
  const [isLoading, setIsLoading] = useState(true);

  // Determine the actual theme based on mode and device preference
  const getActualTheme = (): "light" | "dark" => {
    if (themeMode === "system") {
      return deviceColorScheme === "dark" ? "dark" : "light";
    }
    return themeMode;
  };

  const theme = getActualTheme();
  const isDark = theme === "dark";

  // Load saved theme mode from storage
  useEffect(() => {
    const loadThemeMode = async () => {
      try {
        const savedThemeMode = await Storage.getItem(THEME_STORAGE_KEY);
        if (
          savedThemeMode &&
          ["light", "dark", "system"].includes(savedThemeMode)
        ) {
          setThemeModeState(savedThemeMode as ThemeMode);
        }
      } catch (error) {
        console.warn("Failed to load theme mode from storage:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadThemeMode();
  }, []);

  // Save theme mode to storage
  const setThemeMode = async (mode: ThemeMode) => {
    try {
      await Storage.setItem(THEME_STORAGE_KEY, mode);
      setThemeModeState(mode);
    } catch (error) {
      console.warn("Failed to save theme mode to storage:", error);
    }
  };

  // Toggle between light and dark (ignores system mode)
  const toggleTheme = () => {
    const newMode = theme === "light" ? "dark" : "light";
    setThemeMode(newMode);
  };

  if (isLoading) {
    // You might want to show a loading screen here
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeMode,
        isDark,
        setThemeMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
