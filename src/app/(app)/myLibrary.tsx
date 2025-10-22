import { CardTile } from "@/components/CardTile";
import { Background } from "@/kits/Background";
import { Box } from "@/kits/Box";
import { Text } from "@/kits/typography";
import { IMAGES } from "@/utils/Images";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

function MyLibrary() {
  return (
    <Background paddingTop={32}>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        <Box gap="10" style={{ alignItems: "center", marginBottom: 10 }}>
          <Image
            source={IMAGES.myLibrary}
            style={{ width: 127, height: 104 }}
          />
          <Text
            color="white"
            align="center"
            weight="medium"
            style={{
              backgroundColor: "#3F3F5E",
              paddingHorizontal: 15,
              paddingVertical: 5,
              borderRadius: 10,
            }}
          >
            کتابخانه من
          </Text>
        </Box>
        <Box gap="16" style={{ alignItems: "center" }}>
          <Box
            style={{ flexDirection: "row", gap: 16, flex: 1, width: "100%" }}
          >
            <CardTile
              title="سوابق امانت"
              icon={<FontAwesome name="history" size={36} color="#5C5F66" />}
              onPress={() => {
                // TODO: Add navigation for loan history
              }}
            />
            <CardTile
              title="منابع در دست امانت"
              icon={<FontAwesome name="book" size={36} color="#5C5F66" />}
              onPress={() => {
                // TODO: Add navigation for resources on loan
              }}
            />
          </Box>

          <Box
            style={{ flexDirection: "row", gap: 16, flex: 1, width: "100%" }}
          >
            <CardTile
              title="منابع بارگذاری شده"
              icon={<FontAwesome name="upload" size={36} color="#5C5F66" />}
              onPress={() => {
                // TODO: Add navigation for uploaded resources
              }}
            />
            <CardTile
              title="منابع رزرو شده"
              icon={<FontAwesome name="bookmark" size={36} color="#5C5F66" />}
              onPress={() => {
                // TODO: Add navigation for reserved resources
              }}
            />
          </Box>

          <Box
            style={{ flexDirection: "row", gap: 16, flex: 1, width: "100%" }}
          >
            <CardTile
              title="حاشیه نویسی های من"
              icon={<FontAwesome name="edit" size={36} color="#5C5F66" />}
              onPress={() => {
                // TODO: Add navigation for annotations
              }}
            />
            <CardTile
              title="قفسه های من"
              icon={<FontAwesome name="th" size={36} color="#5C5F66" />}
              onPress={() => {
                // TODO: Add navigation for my shelves
              }}
            />
          </Box>

          <Box style={{ flexDirection: "row", gap: 16, flex: 1, width: "50%" }}>
            <CardTile
              title="منابع خریداری شده"
              icon={
                <FontAwesome name="shopping-cart" size={36} color="#5C5F66" />
              }
              onPress={() => {
                router.push("/myLibrary/purchased");
              }}
            />
          </Box>
        </Box>
      </ScrollView>
    </Background>
  );
}

export default MyLibrary;
