export const Colors = {
  // Primary colors
  primary: {
    main: "#1C39BB", // Dark blue
    light: "#4A90E2", // Light blue
    lighter: "#7BB3F0", // Even lighter blue
    text: "#FFFFFF", // White text on primary
    textDark: "#1C39BB", // Dark blue text on light backgrounds
  },

  // Secondary/Outlined colors
  secondary: {
    main: "#FFFFFF", // White background
    border: "#1C39BB", // Dark blue border
    text: "#1C39BB", // Dark blue text
  },

  border: {
    primary: "#A1C4D880", // Dark blue border
  },

  // Disabled colors
  disabled: {
    background: "#F5F5F5", // Light gray background
    backgroundLight: "#FAFAFA", // Very light gray background
    backgroundLighter: "#FFFFFF", // White background
    border: "#E0E0E0", // Light gray border
    text: "#BDBDBD", // Light gray text
    textLight: "#E0E0E0", // Very light gray text
  },

  // Text-only colors
  text: {
    primary: "#1C39BB", // Dark blue text
    disabled: "#BDBDBD", // Light gray text
  },
} as const;

export type ColorTheme = keyof typeof Colors;
export type ButtonVariant = "filled" | "outlined" | "text";
