import { Text, TextComponentProps } from "./Text";

interface HeadingProps extends TextComponentProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({ level = 1, ...props }: HeadingProps) {
  const sizeMap: Record<number, 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9> = {
    1: 9,
    2: 8,
    3: 7,
    4: 6,
    5: 5,
    6: 4,
  };

  return <Text {...props} size={sizeMap[level]} weight="bold" color="gray" />;
}
