import { Stack } from "expo-router";

function SharedLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackButtonMenuEnabled: false,
        headerBackVisible: false,
      }}
    />
  );
}

export default SharedLayout;
