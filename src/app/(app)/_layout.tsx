import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native-gesture-handler";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "سابیت",
          headerLeftContainerStyle: { paddingHorizontal: 16 },
          headerRightContainerStyle: { paddingHorizontal: 16 },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          headerRight: (props) => (
            <FontAwesome
              size={28}
              name="shopping-basket"
              color={props.tintColor}
            />
          ),
          headerLeft: (props) => (
            <Link href="/(shared)/profile" asChild>
              <Pressable>
                <FontAwesome
                  size={28}
                  name="user-circle"
                  color={props.tintColor}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="myLibrary"
        options={{
          title: "کتابخانه من",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="book" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
