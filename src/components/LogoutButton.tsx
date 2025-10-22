import { Text } from "@/kits/typography";
import Icon from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface LogoutButtonProps {
  onPress?: () => void;
}

export function LogoutButton({ onPress }: LogoutButtonProps) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.cardHeader}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.leftSection}>
            <View style={styles.titleSection}>
              <View style={styles.iconContainer}>
                <Icon name="log-out" size={20} color="#EF4444" />
              </View>
              <Text size={3} weight="medium" color="red" style={styles.title}>
                خروج از حساب کاربری
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 8,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  titleSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  title: {
    marginRight: 8,
  },
  iconContainer: {
    marginLeft: 8,
  },
});
