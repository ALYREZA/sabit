import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

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
            <FontAwesome size={28} name="user-circle" color={props.tintColor} />
          ),
        }}
      />
    </Tabs>
  );
}
