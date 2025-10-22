import { Text } from "@/kits/typography";
import React from "react";
import { StyleSheet, View } from "react-native";
import { MenuItem } from "./MenuItem";

interface MenuSectionProps {
  title?: string;
  items: {
    title: string;
    icon: string;
    onPress?: () => void;
    hasChevron?: boolean;
  }[];
}

export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <View style={styles.section}>
      {title && (
        <View style={styles.sectionHeader}>
          <Text
            size={2}
            color="gray"
            weight="medium"
            style={styles.sectionTitle}
          >
            {title}
          </Text>
        </View>
      )}
      <View style={styles.sectionContent}>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            icon={item.icon}
            onPress={item.onPress}
            hasChevron={item.hasChevron}
            isLast={index === items.length - 1}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  sectionTitle: {
    textAlign: "right",
  },
  sectionContent: {
    backgroundColor: "white",
    borderRadius: 12,
    marginHorizontal: 20,
    overflow: "hidden",
  },
});
