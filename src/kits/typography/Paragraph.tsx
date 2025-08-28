import { Text, TextComponentProps } from "./Text";

export function Paragraph(props: TextComponentProps) {
  return <Text {...props} size={5} />;
}
