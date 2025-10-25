import { CardHorizontal } from "@/components/CardHorizontal";
import { CircularProgress } from "@/components/CircularProgress";
import { useAuth } from "@/contexts/AuthContext";
import useSearch from "@/hooks/requests/queries/search";
import { Background } from "@/kits/Background";
import { Box } from "@/kits/Box";
import { Heading, Text } from "@/kits/typography";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, View } from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";

const categoriesData: any[] = [
  { id: "1", title: "ادبیات", icon: "book" },
  { id: "2", title: "تاریخ", icon: "clock-o" },
  { id: "3", title: "علوم", icon: "flask" },
  { id: "4", title: "هنر", icon: "paint-brush" },
  { id: "5", title: "فلسفه", icon: "lightbulb-o" },
  { id: "6", title: "دین", icon: "star" },
  { id: "7", title: "روانشناسی", icon: "heart" },
  { id: "8", title: "اقتصاد", icon: "line-chart" },
  { id: "9", title: "تکنولوژی", icon: "laptop" },
  { id: "10", title: "ورزش", icon: "futbol-o" },
  { id: "11", title: "سفر", icon: "plane" },
  { id: "12", title: "آشپزی", icon: "cutlery" },
];

const contentTypesData: any[] = [
  { id: "1", title: "عکس", icon: "camera" },
  { id: "2", title: "ویدیویی", icon: "play-circle" },
  { id: "3", title: "صوتی", icon: "headphones" },
  { id: "4", title: "متنی", icon: "file-text-o" },
];
export default function Tab() {
  const { signOut, user } = useAuth();
  const { data: newestList, isLoading: isLoadingNewestList } = useSearch({
    t: "l",
    newResource: true,
    digitalResource: true,
    resourceInformation: false,
  });
  const { data: newestInWeek, isLoading: isLoadingNewestInWeek } = useSearch({
    t: "w",
    sortkey: "store",
    digitalResource: true,
    resourceInformation: false,
  });

  return (
    <Background paddingTop={32}>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={customStyles.container}
      >
        <CardHorizontal
          title="تازه‌ها"
          data={newestList?.biblioList || []}
          hasMore
        />
        <CardHorizontal
          title="انواع منابع"
          data={categoriesData as any}
          renderItem={(item: any, index) => (
            <Pressable key={item.id} style={customStyles.itemBox}>
              <View style={customStyles.imgCategory}>
                <FontAwesome name={item.icon} size={24} color="black" />
                <Text>{item.title}</Text>
              </View>
            </Pressable>
          )}
        />
        <CardHorizontal
          title="پیشنهاد هفته"
          data={newestInWeek?.biblioList || []}
          hasMore
        />
        <CardHorizontal
          title="دسته‌بندی موضوعی"
          data={categoriesData as any}
          renderItem={(item: any, index) => (
            <Pressable key={item.id} style={customStyles.itemBox}>
              <View style={customStyles.imgCategory}>
                <FontAwesome name={item.icon} size={24} color="black" />
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
  signOutButton: {
    backgroundColor: "#FF3B30",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 8,
    alignSelf: "flex-start",
  },
  signOutText: {
    color: "white",
    fontWeight: "600",
  },
});
