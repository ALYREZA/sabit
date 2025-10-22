import { useColor } from "@/hooks";
import { Box } from "@/kits/Box";
import { Text } from "@/kits/typography";
import { ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export interface CardTileProps {
  title: string;
  icon?: ReactNode;
  onPress?: () => void;
}

export function CardTile({ title, icon, onPress }: CardTileProps) {
  const surface = useColor("card");
  const border = useColor("border");

  return (
    <Pressable onPress={onPress} style={{ flex: 1, minHeight: 164 }}>
      <Box
        backgroundColor={surface}
        borderRadius="6"
        style={[styles.container, { borderColor: border }]}
      >
        <View style={styles.icon}>{icon}</View>
        <Box py="2" style={styles.footer}>
          <Text align="center" weight="medium" numberOfLines={2}>
            {title}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    borderWidth: 1,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    height: 112,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
  },
});
