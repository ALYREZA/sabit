import { Href, router } from "expo-router";
import { Pressable } from "react-native-gesture-handler";
import { Text, TextComponentProps } from "./Text";

interface AnchorProps extends TextComponentProps {
  href?: Href;
  onPress?: () => void;
}

export function Anchor({ href, onPress, children, ...props }: AnchorProps) {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <Text {...props} color="blue" style={{ textDecorationLine: "underline" }}>
        {children}
      </Text>
    </Pressable>
  );
}
