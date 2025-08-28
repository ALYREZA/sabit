import { Text, TextComponentProps } from "./Text";

export function Strong(props: TextComponentProps) {
  return <Text {...props} weight="bold" size={5} />;
}

export function Underline(props: TextComponentProps) {
  return (
    <Text {...props} size={5} style={{ textDecorationLine: "underline" }} />
  );
}
