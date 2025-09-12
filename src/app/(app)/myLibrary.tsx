import { CardTile } from "@/components/CardTile";
import { Background } from "@/kits/Background";
import { Box } from "@/kits/Box";
import { Text } from "@/kits/typography";
import { IMAGES } from "@/utils/Images";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "expo-image";
import { router } from "expo-router";

function MyLibrary() {
  return (
    <Background paddingTop={32}>
      <Box gap="10" style={{ alignItems: "center" }}>
        <Image source={IMAGES.myLibrary} style={{ width: 127, height: 104 }} />
        <Text
          color="white"
          align="center"
          weight="medium"
          style={{
            backgroundColor: "#3F3F5E",
            paddingHorizontal: 15,
            borderRadius: 10,
          }}
        >
          کتابخانه من
        </Text>
      </Box>
      <Box style={{ alignItems: "center" }}>
        <CardTile
          title="منابع خریداری شده"
          icon={<FontAwesome name="book" size={36} color="#5C5F66" />}
          onPress={() => {
            router.push("/myLibrary/purchased");
          }}
        />
      </Box>
    </Background>
  );
}

export default MyLibrary;
