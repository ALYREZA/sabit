# Theme System

A comprehensive theme system for React Native/Expo apps with dark/light mode support and device theme detection.

## Features

- 🌙 **Dark/Light Mode Support**: Full support for light and dark themes
- 📱 **Device Theme Detection**: Automatically detects and follows device theme preferences
- 💾 **Persistent Storage**: Uses `expo-sqlite/kv-store` to persist theme preferences
- 🎨 **Comprehensive Color Palette**: Pre-defined color schemes for both themes
- 🔧 **Flexible Hooks**: Multiple hooks for different use cases
- 📦 **TypeScript Support**: Full type safety with TypeScript

## Quick Start

### 1. Wrap your app with ThemeProvider

```tsx
import { ThemeProvider } from '../src/hooks';

export default function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

### 2. Use the theme in your components

```tsx
import { useTheme, useColors } from '../src/hooks';

export const MyComponent = () => {
  const { theme, isDark, toggleTheme } = useTheme();
  const colors = useColors();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>
        Current theme: {theme}
      </Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
};
```

## Available Hooks

### `useTheme()`
Main theme hook that provides theme state and management functions.

```tsx
const { 
  theme,        // 'light' | 'dark'
  themeMode,    // 'light' | 'dark' | 'system'
  isDark,       // boolean
  setThemeMode, // (mode: ThemeMode) => void
  toggleTheme   // () => void
} = useTheme();
```

### `useThemeColors()`
Provides theme colors along with theme state management.

```tsx
const { 
  colors,       // ThemeColors object
  theme,        // 'light' | 'dark'
  themeMode,    // 'light' | 'dark' | 'system'
  isDark,       // boolean
  setThemeMode, // (mode: ThemeMode) => void
  toggleTheme   // () => void
} = useThemeColors();
```

### `useColors()`
Returns only the current theme's color palette.

```tsx
const colors = useColors(); // ThemeColors object
```

### `useColor(colorKey)`
Returns a specific color from the current theme.

```tsx
const backgroundColor = useColor('background');
const textColor = useColor('text');
const primaryColor = useColor('primary');
```

### `useDeviceTheme()`
Provides information about the device's current theme preference.

```tsx
const { 
  deviceTheme,  // 'light' | 'dark' | null
  isDarkMode,   // boolean
  isLightMode,  // boolean
  isAvailable   // boolean
} = useDeviceTheme();
```

### `useDeviceDefaultTheme()`
Provides information about the device's default theme preference.

```tsx
const { 
  defaultTheme,      // 'light' | 'dark' | null
  prefersDark,       // boolean
  prefersLight,      // boolean
  hasThemePreference // boolean
} = useDeviceDefaultTheme();
```

## Theme Modes

### `'light'`
Forces the app to use light theme regardless of device preference.

### `'dark'`
Forces the app to use dark theme regardless of device preference.

### `'system'` (default)
Follows the device's theme preference automatically.

## Color Palette

The theme system provides a comprehensive color palette with the following colors:

### Background Colors
- `background` - Main background color
- `surface` - Surface/card background color
- `surfaceVariant` - Variant surface color

### Text Colors
- `text` - Primary text color
- `textSecondary` - Secondary text color
- `textTertiary` - Tertiary text color

### Primary Colors
- `primary` - Primary brand color
- `primaryContainer` - Primary container color
- `onPrimary` - Text color on primary background
- `onPrimaryContainer` - Text color on primary container

### Secondary Colors
- `secondary` - Secondary brand color
- `secondaryContainer` - Secondary container color
- `onSecondary` - Text color on secondary background
- `onSecondaryContainer` - Text color on secondary container

### Error Colors
- `error` - Error color
- `errorContainer` - Error container color
- `onError` - Text color on error background
- `onErrorContainer` - Text color on error container

### Utility Colors
- `border` - Border color
- `divider` - Divider color
- `overlay` - Overlay color
- `shadow` - Shadow color

## Usage Examples

### Basic Component with Theme

```tsx
import { useColors } from '../src/hooks';

export const Card = ({ children }) => {
  const colors = useColors();
  
  return (
    <View style={{
      backgroundColor: colors.surface,
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: 8,
      padding: 16,
    }}>
      {children}
    </View>
  );
};
```

### Theme Toggle Button

```tsx
import { useTheme, useColors } from '../src/hooks';

export const ThemeToggle = () => {
  const { themeMode, setThemeMode } = useTheme();
  const colors = useColors();
  
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <TouchableOpacity
        style={{
          backgroundColor: themeMode === 'light' ? colors.primary : colors.surface,
          padding: 8,
          borderRadius: 4,
        }}
        onPress={() => setThemeMode('light')}
      >
        <Text style={{ color: themeMode === 'light' ? colors.onPrimary : colors.text }}>
          Light
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{
          backgroundColor: themeMode === 'dark' ? colors.primary : colors.surface,
          padding: 8,
          borderRadius: 4,
        }}
        onPress={() => setThemeMode('dark')}
      >
        <Text style={{ color: themeMode === 'dark' ? colors.onPrimary : colors.text }}>
          Dark
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{
          backgroundColor: themeMode === 'system' ? colors.primary : colors.surface,
          padding: 8,
          borderRadius: 4,
        }}
        onPress={() => setThemeMode('system')}
      >
        <Text style={{ color: themeMode === 'system' ? colors.onPrimary : colors.text }}>
          System
        </Text>
      </TouchableOpacity>
    </View>
  );
};
```

### Device Theme Detection

```tsx
import { useDeviceTheme } from '../src/hooks';

export const DeviceInfo = () => {
  const { deviceTheme, isDarkMode, isAvailable } = useDeviceTheme();
  
  return (
    <View>
      <Text>Device Theme: {deviceTheme || 'Not available'}</Text>
      <Text>Is Dark Mode: {isDarkMode ? 'Yes' : 'No'}</Text>
      <Text>Theme Available: {isAvailable ? 'Yes' : 'No'}</Text>
    </View>
  );
};
```

## Storage

The theme system uses `expo-sqlite/kv-store` to persist theme preferences. The theme mode is stored with the key `@theme_mode`.

## TypeScript

All hooks and types are fully typed. You can import types from the hooks:

```tsx
import { ThemeMode, Theme, ThemeColors } from '../src/hooks';

type MyComponentProps = {
  theme: Theme;
  colors: ThemeColors;
};
```

## Migration from AsyncStorage

If you were previously using AsyncStorage, the theme system now uses `expo-sqlite/kv-store` for better performance and reliability. The storage key remains the same (`@theme_mode`), so existing theme preferences will be preserved.
