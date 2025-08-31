import { Background } from "@/kits/Background";
import { IMAGES } from "@/utils/Images";
import { Image } from "expo-image";
import { Slot } from "expo-router";

export default function AuthLayout() {
  return (
    <Background
      alignItems="center"
      justifyContent="center"
      enabledKeyboardAwareScrollView={true}
    >
      <Image source={IMAGES.logo} style={{ width: 94, height: 109 }} />
      <Slot />
    </Background>
  );
}
