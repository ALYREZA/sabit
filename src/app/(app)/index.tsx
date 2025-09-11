import {
  CardHorizontal,
  CardHorizontalItem,
} from "@/components/CardHorizontal";
import { CircularProgress } from "@/components/CircularProgress";
import { Background } from "@/kits/Background";
import { Box } from "@/kits/Box";
import { Heading, Text } from "@/kits/typography";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, View } from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";

const myData: CardHorizontalItem[] = [
  { id: "1", title: "Title 1", subtitle: "Subtitle 1", image: "url1" },
  { id: "2", title: "Title 2", subtitle: "Subtitle 2", image: "url2" },
  { id: "3", title: "Title 3", subtitle: "Subtitle 3", image: "url3" },
  { id: "4", title: "Title 4", subtitle: "Subtitle 4", image: "url4" },
  { id: "5", title: "Title 5", subtitle: "Subtitle 5", image: "url5" },
  { id: "6", title: "Title 6", subtitle: "Subtitle 6", image: "url6" },
  { id: "7", title: "Title 7", subtitle: "Subtitle 7", image: "url7" },
  { id: "8", title: "Title 8", subtitle: "Subtitle 8", image: "url8" },
  { id: "9", title: "Title 9", subtitle: "Subtitle 9", image: "url9" },
];
const categoriesData: CardHorizontalItem[] = [
  { id: "1", title: "Title 1", icon: "url1" },
  { id: "2", title: "Title 2", icon: "url2" },
  { id: "3", title: "Title 3", icon: "url3" },
  { id: "4", title: "Title 4", icon: "url4" },
  { id: "5", title: "Title 5", icon: "url5" },
];
export default function Tab() {
  return (
    <Background paddingTop={32}>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={customStyles.container}
      >
        <CardHorizontal
          title="تازه‌ها"
          data={myData}
          hasMore
          renderItem={(item, index) => (
            <Pressable key={item.id} style={customStyles.itemBox}>
              <View style={customStyles.img} />
              <Text>{item.title}</Text>
              <Text>{item.subtitle}</Text>
            </Pressable>
          )}
        />
        <CardHorizontal
          title="انواع منابع"
          data={categoriesData}
          renderItem={(item, index) => (
            <Pressable key={item.id} style={customStyles.itemBox}>
              <View style={customStyles.imgCategory}>
                <FontAwesome name="book" size={24} color="black" />
                <Text>{item.title}</Text>
              </View>
            </Pressable>
          )}
        />
        <CardHorizontal
          title="پیشنهاد هفته"
          data={myData}
          hasMore
          renderItem={(item, index) => (
            <Pressable key={item.id} style={customStyles.itemBox}>
              <View style={customStyles.img} />
              <Text>{item.title}</Text>
              <Text>{item.subtitle}</Text>
            </Pressable>
          )}
        />
        <CardHorizontal
          title="دسته‌بندی موضوعی"
          data={categoriesData}
          renderItem={(item, index) => (
            <Pressable key={item.id} style={customStyles.itemBox}>
              <View style={customStyles.imgCategory}>
                <FontAwesome name="book" size={24} color="black" />
                <Text>{item.title}</Text>
              </View>
            </Pressable>
          )}
        />
        <Box px="5">
          <Heading level={2} align="right">
            اهداف مطالعه
          </Heading>
          <CircularProgress
            currentTime="00:30:25"
            remainingTime="۵۰ دقیقه مانده تا رسیدن به هدف"
            progress={0.1} // 67% complete
            size={200}
            strokeWidth={12}
          />
        </Box>
      </ScrollView>
    </Background>
  );
}

const customStyles = StyleSheet.create({
  itemBox: {
    alignItems: "flex-end",
  },
  img: {
    height: 112,
    width: 78,
    backgroundColor: "red",
  },
  imgCategory: {
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 107,
    width: 88,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#222",
  },
  container: {
    gap: 24,
    paddingBottom: 10,
  },
});
