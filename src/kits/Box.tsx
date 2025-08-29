import { ReactNode, useMemo } from "react";
import { DimensionValue, StyleProp, View, ViewStyle } from "react-native";

// Responsive type for props that can be responsive
type Responsive<T> = T | { [key: string]: T };

// Spacing scale values (similar to Radix UI)
type SpacingScale =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31"
  | "32"
  | "33"
  | "34"
  | "35"
  | "36"
  | "37"
  | "38"
  | "39"
  | "40"
  | "41"
  | "42"
  | "43"
  | "44"
  | "45"
  | "46"
  | "47"
  | "48"
  | "49"
  | "50"
  | "51"
  | "52"
  | "53"
  | "54"
  | "55"
  | "56"
  | "57"
  | "58"
  | "59"
  | "60"
  | "61"
  | "62"
  | "63"
  | "64"
  | "65"
  | "66"
  | "67"
  | "68"
  | "69"
  | "70"
  | "71"
  | "72"
  | "73"
  | "74"
  | "75"
  | "76"
  | "77"
  | "78"
  | "79"
  | "80"
  | "81"
  | "82"
  | "83"
  | "84"
  | "85"
  | "86"
  | "87"
  | "88"
  | "89"
  | "90"
  | "91"
  | "92"
  | "93"
  | "94"
  | "95"
  | "96"
  | "97"
  | "98"
  | "99"
  | "100";

// Border radius scale values
type BorderRadiusScale =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31"
  | "32"
  | "33"
  | "34"
  | "35"
  | "36"
  | "37"
  | "38"
  | "39"
  | "40"
  | "41"
  | "42"
  | "43"
  | "44"
  | "45"
  | "46"
  | "47"
  | "48"
  | "49"
  | "50"
  | "51"
  | "52"
  | "53"
  | "54"
  | "55"
  | "56"
  | "57"
  | "58"
  | "59"
  | "60"
  | "61"
  | "62"
  | "63"
  | "64"
  | "65"
  | "66"
  | "67"
  | "68"
  | "69"
  | "70"
  | "71"
  | "72"
  | "73"
  | "74"
  | "75"
  | "76"
  | "77"
  | "78"
  | "79"
  | "80"
  | "81"
  | "82"
  | "83"
  | "84"
  | "85"
  | "86"
  | "87"
  | "88"
  | "89"
  | "90"
  | "91"
  | "92"
  | "93"
  | "94"
  | "95"
  | "96"
  | "97"
  | "98"
  | "99"
  | "100";

// Display values
type Display =
  | "block"
  | "inline"
  | "inline-block"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "none";

// Position values
type Position = "static" | "relative" | "absolute" | "fixed" | "sticky";

// Overflow values
type Overflow = "visible" | "hidden" | "scroll" | "auto";

// Flex values
type FlexValue = "0" | "1" | "auto" | "initial" | "none";

// Flex direction values
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

// Flex wrap values
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

// Grid values
type GridValue = string;

// Box component props interface
export interface BoxProps {
  // Children
  children?: ReactNode;

  // Element type
  as?: "div" | "span";
  asChild?: boolean;

  // Display
  display?: Responsive<Display>;

  // Background
  backgroundColor?: Responsive<string>;

  // Border radius
  borderRadius?: Responsive<BorderRadiusScale | string>;
  borderTopLeftRadius?: Responsive<BorderRadiusScale | string>;
  borderTopRightRadius?: Responsive<BorderRadiusScale | string>;
  borderBottomLeftRadius?: Responsive<BorderRadiusScale | string>;
  borderBottomRightRadius?: Responsive<BorderRadiusScale | string>;

  // Spacing (padding)
  p?: Responsive<SpacingScale | string>;
  px?: Responsive<SpacingScale | string>;
  py?: Responsive<SpacingScale | string>;
  pt?: Responsive<SpacingScale | string>;
  pr?: Responsive<SpacingScale | string>;
  pb?: Responsive<SpacingScale | string>;
  pl?: Responsive<SpacingScale | string>;

  // Spacing (margin)
  m?: Responsive<SpacingScale | string>;
  mx?: Responsive<SpacingScale | string>;
  my?: Responsive<SpacingScale | string>;
  mt?: Responsive<SpacingScale | string>;
  mr?: Responsive<SpacingScale | string>;
  mb?: Responsive<SpacingScale | string>;
  ml?: Responsive<SpacingScale | string>;

  // Sizing
  width?: Responsive<string>;
  minWidth?: Responsive<string>;
  maxWidth?: Responsive<string>;
  height?: Responsive<string>;
  minHeight?: Responsive<string>;
  maxHeight?: Responsive<string>;

  // Position
  position?: Responsive<Position>;
  inset?: Responsive<SpacingScale | string>;
  top?: Responsive<SpacingScale | string>;
  right?: Responsive<SpacingScale | string>;
  bottom?: Responsive<SpacingScale | string>;
  left?: Responsive<SpacingScale | string>;

  // Overflow
  overflow?: Responsive<Overflow>;
  overflowX?: Responsive<Overflow>;
  overflowY?: Responsive<Overflow>;

  // Flex
  flexDirection?: Responsive<FlexDirection>;
  flexWrap?: Responsive<FlexWrap>;
  flexBasis?: Responsive<string>;
  flexShrink?: Responsive<FlexValue>;
  flexGrow?: Responsive<FlexValue>;

  // Gap
  gap?: Responsive<SpacingScale | string>;
  rowGap?: Responsive<SpacingScale | string>;
  columnGap?: Responsive<SpacingScale | string>;

  // Grid
  gridArea?: Responsive<GridValue>;
  gridColumn?: Responsive<GridValue>;
  gridColumnStart?: Responsive<GridValue>;
  gridColumnEnd?: Responsive<GridValue>;
  gridRow?: Responsive<GridValue>;
  gridRowStart?: Responsive<GridValue>;
  gridRowEnd?: Responsive<GridValue>;

  // Additional style prop for custom styles
  style?: StyleProp<ViewStyle>;
}

// Cache for spacing values to avoid repeated calculations
const spacingCache = new Map<string, number>();

// Cache for border radius values to avoid repeated calculations
const borderRadiusCache = new Map<string, number>();

// Helper function to convert spacing scale to pixels
function getSpacingValue(value: SpacingScale | string): DimensionValue {
  if (typeof value === "string" && /^\d+$/.test(value)) {
    // Check cache first
    if (spacingCache.has(value)) {
      return spacingCache.get(value)!;
    }
    // Convert scale to pixels (4px per unit like Radix UI)
    const result = parseInt(value) * 4;
    spacingCache.set(value, result);
    return result;
  }
  return value as DimensionValue;
}

// Helper function to convert border radius scale to pixels
function getBorderRadiusValue(
  value: BorderRadiusScale | string,
): DimensionValue {
  if (typeof value === "string" && /^\d+$/.test(value)) {
    // Check cache first
    if (borderRadiusCache.has(value)) {
      return borderRadiusCache.get(value)!;
    }
    // Convert scale to pixels (4px per unit like Radix UI)
    const result = parseInt(value) * 4;
    borderRadiusCache.set(value, result);
    return result;
  }
  return value as DimensionValue;
}

// Helper function to process responsive dimension values
function processResponsiveDimension<T>(
  value: Responsive<T> | undefined,
  processor: (val: T) => DimensionValue,
): DimensionValue | undefined {
  if (value === undefined) return undefined;

  if (typeof value === "object" && value !== null) {
    // Handle responsive object - for now return the first value
    const keys = Object.keys(value);
    if (keys.length > 0) {
      return processor(value[keys[0] as keyof typeof value] as T);
    }
    return undefined;
  }

  return processor(value as T);
}

// Helper function to process responsive string values
function processResponsiveString<T>(
  value: Responsive<T> | undefined,
  processor: (val: T) => string,
): string | undefined {
  if (value === undefined) return undefined;

  if (typeof value === "object" && value !== null) {
    // Handle responsive object - for now return the first value
    const keys = Object.keys(value);
    if (keys.length > 0) {
      return processor(value[keys[0] as keyof typeof value] as T);
    }
    return undefined;
  }

  return processor(value as T);
}

// Helper function to build styles from props
function buildStylesFromProps(props: BoxProps): ViewStyle {
  const styles: ViewStyle = {};

  // Background
  if (props.backgroundColor) {
    const backgroundColor = processResponsiveString(
      props.backgroundColor,
      (val) => val,
    );
    if (backgroundColor) styles.backgroundColor = backgroundColor;
  }

  // Border radius
  if (props.borderRadius) {
    const borderRadius = processResponsiveDimension(
      props.borderRadius,
      getBorderRadiusValue,
    );
    if (borderRadius) styles.borderRadius = borderRadius;
  }
  if (props.borderTopLeftRadius) {
    const borderTopLeftRadius = processResponsiveDimension(
      props.borderTopLeftRadius,
      getBorderRadiusValue,
    );
    if (borderTopLeftRadius) styles.borderTopLeftRadius = borderTopLeftRadius;
  }
  if (props.borderTopRightRadius) {
    const borderTopRightRadius = processResponsiveDimension(
      props.borderTopRightRadius,
      getBorderRadiusValue,
    );
    if (borderTopRightRadius)
      styles.borderTopRightRadius = borderTopRightRadius;
  }
  if (props.borderBottomLeftRadius) {
    const borderBottomLeftRadius = processResponsiveDimension(
      props.borderBottomLeftRadius,
      getBorderRadiusValue,
    );
    if (borderBottomLeftRadius)
      styles.borderBottomLeftRadius = borderBottomLeftRadius;
  }
  if (props.borderBottomRightRadius) {
    const borderBottomRightRadius = processResponsiveDimension(
      props.borderBottomRightRadius,
      getBorderRadiusValue,
    );
    if (borderBottomRightRadius)
      styles.borderBottomRightRadius = borderBottomRightRadius;
  }

  // Display
  if (props.display) {
    const display = processResponsiveString(props.display, (val) => val);
    if (display) {
      if (display === "flex") styles.flexDirection = "row";
      // Note: React Native doesn't support all CSS display values
      // We'll handle flex and basic layout
    }
  }

  // Padding
  if (props.p) {
    const padding = processResponsiveDimension(props.p, getSpacingValue);
    if (padding) styles.padding = padding;
  }
  if (props.px) {
    const paddingHorizontal = processResponsiveDimension(
      props.px,
      getSpacingValue,
    );
    if (paddingHorizontal) styles.paddingHorizontal = paddingHorizontal;
  }
  if (props.py) {
    const paddingVertical = processResponsiveDimension(
      props.py,
      getSpacingValue,
    );
    if (paddingVertical) styles.paddingVertical = paddingVertical;
  }
  if (props.pt) {
    const paddingTop = processResponsiveDimension(props.pt, getSpacingValue);
    if (paddingTop) styles.paddingTop = paddingTop;
  }
  if (props.pr) {
    const paddingRight = processResponsiveDimension(props.pr, getSpacingValue);
    if (paddingRight) styles.paddingRight = paddingRight;
  }
  if (props.pb) {
    const paddingBottom = processResponsiveDimension(props.pb, getSpacingValue);
    if (paddingBottom) styles.paddingBottom = paddingBottom;
  }
  if (props.pl) {
    const paddingLeft = processResponsiveDimension(props.pl, getSpacingValue);
    if (paddingLeft) styles.paddingLeft = paddingLeft;
  }

  // Margin
  if (props.m) {
    const margin = processResponsiveDimension(props.m, getSpacingValue);
    if (margin) styles.margin = margin;
  }
  if (props.mx) {
    const marginHorizontal = processResponsiveDimension(
      props.mx,
      getSpacingValue,
    );
    if (marginHorizontal) styles.marginHorizontal = marginHorizontal;
  }
  if (props.my) {
    const marginVertical = processResponsiveDimension(
      props.my,
      getSpacingValue,
    );
    if (marginVertical) styles.marginVertical = marginVertical;
  }
  if (props.mt) {
    const marginTop = processResponsiveDimension(props.mt, getSpacingValue);
    if (marginTop) styles.marginTop = marginTop;
  }
  if (props.mr) {
    const marginRight = processResponsiveDimension(props.mr, getSpacingValue);
    if (marginRight) styles.marginRight = marginRight;
  }
  if (props.mb) {
    const marginBottom = processResponsiveDimension(props.mb, getSpacingValue);
    if (marginBottom) styles.marginBottom = marginBottom;
  }
  if (props.ml) {
    const marginLeft = processResponsiveDimension(props.ml, getSpacingValue);
    if (marginLeft) styles.marginLeft = marginLeft;
  }

  // Sizing
  if (props.width) {
    const width = processResponsiveDimension(
      props.width,
      (val) => val as DimensionValue,
    );
    if (width) styles.width = width;
  }
  if (props.minWidth) {
    const minWidth = processResponsiveDimension(
      props.minWidth,
      (val) => val as DimensionValue,
    );
    if (minWidth) styles.minWidth = minWidth;
  }
  if (props.maxWidth) {
    const maxWidth = processResponsiveDimension(
      props.maxWidth,
      (val) => val as DimensionValue,
    );
    if (maxWidth) styles.maxWidth = maxWidth;
  }
  if (props.height) {
    const height = processResponsiveDimension(
      props.height,
      (val) => val as DimensionValue,
    );
    if (height) styles.height = height;
  }
  if (props.minHeight) {
    const minHeight = processResponsiveDimension(
      props.minHeight,
      (val) => val as DimensionValue,
    );
    if (minHeight) styles.minHeight = minHeight;
  }
  if (props.maxHeight) {
    const maxHeight = processResponsiveDimension(
      props.maxHeight,
      (val) => val as DimensionValue,
    );
    if (maxHeight) styles.maxHeight = maxHeight;
  }

  // Position
  if (props.position) {
    const position = processResponsiveString(props.position, (val) => val);
    if (position) styles.position = position as any;
  }
  if (props.top) {
    const top = processResponsiveDimension(props.top, getSpacingValue);
    if (top) styles.top = top;
  }
  if (props.right) {
    const right = processResponsiveDimension(props.right, getSpacingValue);
    if (right) styles.right = right;
  }
  if (props.bottom) {
    const bottom = processResponsiveDimension(props.bottom, getSpacingValue);
    if (bottom) styles.bottom = bottom;
  }
  if (props.left) {
    const left = processResponsiveDimension(props.left, getSpacingValue);
    if (left) styles.left = left;
  }

  // Overflow
  if (props.overflow) {
    const overflow = processResponsiveString(props.overflow, (val) => val);
    if (overflow) styles.overflow = overflow as any;
  }

  // Flex
  if (props.flexDirection) {
    const flexDirection = processResponsiveString(
      props.flexDirection,
      (val) => val,
    );
    if (flexDirection) styles.flexDirection = flexDirection as any;
  }
  if (props.flexWrap) {
    const flexWrap = processResponsiveString(props.flexWrap, (val) => val);
    if (flexWrap) styles.flexWrap = flexWrap as any;
  }
  if (props.flexBasis) {
    const flexBasis = processResponsiveDimension(
      props.flexBasis,
      (val) => val as DimensionValue,
    );
    if (flexBasis) styles.flexBasis = flexBasis;
  }
  if (props.flexShrink) {
    const flexShrink = processResponsiveString(props.flexShrink, (val) => {
      if (val === "0") return "0";
      if (val === "1") return "1";
      return val;
    });
    if (flexShrink !== undefined) styles.flexShrink = parseInt(flexShrink);
  }
  if (props.flexGrow) {
    const flexGrow = processResponsiveString(props.flexGrow, (val) => {
      if (val === "0") return "0";
      if (val === "1") return "1";
      return val;
    });
    if (flexGrow !== undefined) styles.flexGrow = parseInt(flexGrow);
  }

  // Gap
  if (props.gap) {
    const gap = processResponsiveDimension(props.gap, getSpacingValue);
    if (gap) styles.gap = gap as any;
  }
  if (props.rowGap) {
    const rowGap = processResponsiveDimension(props.rowGap, getSpacingValue);
    if (rowGap) styles.rowGap = rowGap as any;
  }
  if (props.columnGap) {
    const columnGap = processResponsiveDimension(
      props.columnGap,
      getSpacingValue,
    );
    if (columnGap) styles.columnGap = columnGap as any;
  }

  return styles;
}

export function Box({ children, style, ...props }: BoxProps) {
  const computedStyles = useMemo(() => buildStylesFromProps(props), [props]);

  return <View style={[computedStyles, style]}>{children}</View>;
}
