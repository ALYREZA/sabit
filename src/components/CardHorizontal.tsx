import { Box } from "@/kits/Box";
import { Heading, Text } from "@/kits/typography";
import { BiblioList } from "@/utils/http/type";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "expo-image";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList, Pressable } from "react-native-gesture-handler";
import { RenderIf } from "./RenderIf";
interface CardHorizontalProps {
  title: string;
  hasMore?: boolean;
  onMorePress?: () => void;
  data: BiblioList[];
  renderItem?: (item: BiblioList, index: number) => React.ReactElement;
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

interface ImageWithFallbackProps {
  uri: string;
  style: any;
}

function ImageWithFallback({ uri, style }: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <View style={[style, styles.fallbackContainer]}>
        <FontAwesome name="image" size={24} color="#ccc" />
      </View>
    );
  }

  return (
    <Image
      style={style}
      source={{ uri }}
      placeholder={blurhash}
      contentFit="cover"
      onError={() => setHasError(true)}
    />
  );
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
              <ImageWithFallback uri={item.imgAddress} style={styles.img} />
              <Text style={styles.title} truncate>
                {item.title}
              </Text>
              <Text style={styles.subtitle} truncate>
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
    height: 180,
    width: 120,
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
    maxWidth: 130,
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
  fallbackContainer: {
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
});
