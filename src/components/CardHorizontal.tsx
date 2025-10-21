import { Box } from "@/kits/Box";
import { Heading, Text } from "@/kits/typography";
import { BiblioList } from "@/utils/http/type";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";
import { FlatList, Pressable } from "react-native-gesture-handler";
import { RenderIf } from "./RenderIf";
interface CardHorizontalProps {
  title: string;
  hasMore?: boolean;
  onMorePress?: () => void;
  data: BiblioList[];
  renderItem?: (item: BiblioList, index: number) => React.ReactElement;
}

export function CardHorizontal({
  title,
  hasMore = false,
  onMorePress,
  data,
  renderItem,
}: CardHorizontalProps) {
  return (
    <Box>
      <Box
        px="5"
        flexDirection={"row"}
        style={[styles.header, !hasMore && { alignSelf: "flex-start" }]}
      >
        <Heading level={2}>{title}</Heading>
        <RenderIf condition={hasMore}>
          <Pressable style={styles.more} onPress={onMorePress}>
            <Text>بیشتر</Text>
            <FontAwesome name="chevron-left" size={10} />
          </Pressable>
        </RenderIf>
      </Box>
      <FlatList
        horizontal
        contentContainerStyle={styles.wrapper}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => {
          if (renderItem) {
            return renderItem(item, index);
          }
          return (
            <Pressable style={styles.itemBox}>
              <Image style={styles.img} source={{ uri: item.imgAddress }} />
              <Text numberOfLines={1} style={styles.title}>
                {item.title}
              </Text>
              <Text numberOfLines={1} style={styles.subtitle}>
                {item.mainEntry}
              </Text>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 112,
    width: 78,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    fontWeight: "normal",
  },
  header: {
    alignContent: "center",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  itemBox: {
    alignItems: "flex-start",
  },
  more: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  wrapper: {
    paddingHorizontal: 16,
    gap: 24,
  },
});
