import { Box } from "@/kits/Box";
import { Heading, Text } from "@/kits/typography";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList, Pressable } from "react-native-gesture-handler";
import { RenderIf } from "./RenderIf";

export interface CardHorizontalItem {
  id: string;
  image?: string;
  icon?: string;
  title: string;
  subtitle?: string;
}

interface CardHorizontalProps {
  title: string;
  hasMore?: boolean;
  onMorePress?: () => void;
  data: CardHorizontalItem[];
  renderItem?: (item: CardHorizontalItem, index: number) => React.ReactElement;
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
        style={[styles.header, !hasMore && { alignSelf: "flex-end" }]}
      >
        <RenderIf condition={hasMore}>
          <Pressable style={styles.more} onPress={onMorePress}>
            <FontAwesome name="chevron-left" size={10} />
            <Text>بیشتر</Text>
          </Pressable>
        </RenderIf>
        <Heading level={2}>{title}</Heading>
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
              <View style={styles.img} />
              <Heading level={4}>{item.title}</Heading>
              <Heading level={5}>{item.subtitle}</Heading>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 112,
    width: 78,
    backgroundColor: "red",
  },
  header: {
    alignContent: "center",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  itemBox: {
    alignItems: "flex-end",
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
