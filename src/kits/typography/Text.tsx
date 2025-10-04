import {
  Text as RNText,
  StyleSheet,
  TextInputProps,
  TextProps,
  TextStyle,
} from "react-native";

type TextSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type TextWeight = "light" | "regular" | "medium" | "bold";
type TextAlign = "left" | "center" | "right";
type TextTrim = "normal" | "start" | "end" | "both";
type TextWrap = "wrap" | "nowrap" | "pretty" | "balance";
type TextColor =
  | "black"
  | "white"
  | "gray"
  | "mauve"
  | "slate"
  | "sage"
  | "olive"
  | "sand"
  | "tomato"
  | "red"
  | "ruby"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "jade"
  | "green"
  | "grass"
  | "brown"
  | "orange"
  | "sky"
  | "mint"
  | "lime"
  | "yellow"
  | "amber"
  | "gold"
  | "bronze";

export interface TextComponentProps extends Omit<TextProps, "style"> {
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  trim?: TextTrim;
  truncate?: boolean;
  wrap?: TextWrap;
  color?: TextColor;
  highContrast?: boolean;
  fontFamily?: string;
  style?: TextInputProps["style"];
}

export function Text({
  size = 3,
  weight = "regular",
  align = "left",
  trim = "normal",
  truncate = false,
  wrap = "wrap",
  color = "gray",
  highContrast = false,
  fontFamily,
  style,
  children,
  ...props
}: TextComponentProps) {
  const textStyle = [
    styles.text,
    styles[`size${size}` as keyof typeof styles],
    styles[`weight${weight}` as keyof typeof styles],
    styles[`align${align}` as keyof typeof styles],
    styles[`color${color}` as keyof typeof styles],
    highContrast && styles.highContrast,
    styles[`wrap${wrap}` as keyof typeof styles],
    trim !== "normal" && styles[`trim${trim}` as keyof typeof styles],
    fontFamily && { fontFamily },
    style,
  ].filter(Boolean) as TextStyle[];

  // Debug: Log the final style to see what fontFamily is being applied
  if (__DEV__) {
    console.log(
      "Text component fontFamily:",
      textStyle.find((s) => s && typeof s === "object" && "fontFamily" in s)
        ?.fontFamily,
    );
  }

  return (
    <RNText
      {...props}
      style={textStyle}
      numberOfLines={truncate ? 1 : undefined}
      ellipsizeMode={truncate ? "tail" : undefined}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: "#11181C",
    fontFamily: "IRANSansWeb-FaNum-Light",
  },

  // Size variants
  size1: { fontSize: 12, lineHeight: 16 },
  size2: { fontSize: 13, lineHeight: 18 },
  size3: { fontSize: 14, lineHeight: 20 },
  size4: { fontSize: 15, lineHeight: 22 },
  size5: { fontSize: 16, lineHeight: 24 },
  size6: { fontSize: 17, lineHeight: 26 },
  size7: { fontSize: 19, lineHeight: 28 },
  size8: { fontSize: 21, lineHeight: 30 },
  size9: { fontSize: 27, lineHeight: 35 },

  // Weight variants
  weightlight: { fontFamily: "IRANSansWeb-FaNum-UltraLight" },
  weightregular: { fontFamily: "IRANSansWeb-FaNum-Light" },
  weightmedium: { fontFamily: "IRANSansWeb-FaNum-Medium" },
  weightbold: { fontFamily: "IRANSansWeb-FaNum-Bold" },

  // Alignment variants
  alignleft: { textAlign: "left" },
  aligncenter: { textAlign: "center" },
  alignright: { textAlign: "right" },

  // Color variants (using a simplified color palette)
  colorgray: { color: "#6F7E7C" },
  colormauve: { color: "#8B7D77" },
  colorslate: { color: "#5C5F66" },
  colorsage: { color: "#5C7C7A" },
  colorolive: { color: "#6B7D5D" },
  colorsand: { color: "#8D7F74" },
  colortomato: { color: "#E54D2E" },
  colorred: { color: "#E03131" },
  colorruby: { color: "#E03169" },
  colorcrimson: { color: "#DC2626" },
  colorpink: { color: "#E91E63" },
  colorplum: { color: "#AB4ABA" },
  colorpurple: { color: "#9333EA" },
  colorviolet: { color: "#7C3AED" },
  coloriris: { color: "#5B5BD6" },
  colorindigo: { color: "#4338CA" },
  colorblue: { color: "#3B82F6" },
  colorcyan: { color: "#06B6D4" },
  colorteal: { color: "#0D9488" },
  colorjade: { color: "#059669" },
  colorgreen: { color: "#16A34A" },
  colorgrass: { color: "#65A30D" },
  colorbrown: { color: "#A16207" },
  colororange: { color: "#EA580C" },
  colorsky: { color: "#0EA5E9" },
  colormint: { color: "#10B981" },
  colorlime: { color: "#84CC16" },
  coloryellow: { color: "#EAB308" },
  coloramber: { color: "#F59E0B" },
  colorgold: { color: "#F59E0B" },
  colorbronze: { color: "#CD7F32" },
  colorblack: { color: "#000000" },
  colorwhite: { color: "#FFFFFF" },

  // High contrast
  highContrast: {
    // Enhanced contrast colors would be applied here
    // For now, using a darker variant
  },

  // Truncation - handled via props, not styles
  truncate: {},

  // Wrap variants
  wrapwrap: { flexWrap: "wrap" },
  wrapnowrap: { flexWrap: "nowrap" },
  wrappretty: { flexWrap: "wrap" }, // React Native doesn't support text-wrap: pretty
  wrapbalance: { flexWrap: "wrap" }, // React Native doesn't support text-wrap: balance

  // Trim variants (using margin adjustments)
  trimstart: { marginTop: -2 },
  trimend: { marginBottom: -2 },
  trimboth: { marginTop: -2, marginBottom: -2 },
});
