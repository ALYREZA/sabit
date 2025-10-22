import { Text } from "@/kits/typography";
import Icon from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface BreadcrumbProps {
  items: string[];
  onItemPress?: (index: number) => void;
}

export function Breadcrumb({ items, onItemPress }: BreadcrumbProps) {
  return (
    <View style={styles.container}>
      <View style={styles.breadcrumbContent}>
        <View style={styles.breadcrumbItems}>
          {items.map((item, index) => (
            <View key={index} style={styles.breadcrumbItem}>
              {index > 0 && (
                <Icon
                  name="chevron-left"
                  size={16}
                  color="#6B7280"
                  style={styles.separator}
                />
              )}
              <TouchableOpacity
                onPress={() => onItemPress?.(index)}
                style={styles.breadcrumbLink}
                disabled={index === items.length - 1}
              >
                <Text
                  size={2}
                  color={index === items.length - 1 ? "gray" : "blue"}
                  style={[
                    styles.breadcrumbText,
                    index === items.length - 1 && styles.currentItem,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  breadcrumbContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  breadcrumbItems: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  breadcrumbItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    marginHorizontal: 8,
  },
  breadcrumbLink: {
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  breadcrumbText: {
    textAlign: "right",
  },
  currentItem: {
    fontWeight: "600",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  actionButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
  },
});
