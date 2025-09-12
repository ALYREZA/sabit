import { Background } from "@/kits/Background";
import { Box } from "@/kits/Box";
import { SegmentedControl } from "@/kits/SegmentedControl";
import { Text } from "@/kits/typography";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "expo-router";
import React from "react";

function Purchased() {
  const [tab, setTab] = React.useState<string>("physical");
  const navigation = useNavigation();
  navigation.setOptions({
    headerTitle: "منابع خریداری شده",
    headerLeft: () => (
      <Box flexDirection="row" gap="5">
        <FontAwesome name="list" size={24} color="black" />
        <FontAwesome name="sort-amount-asc" size={24} color="black" />
      </Box>
    ),
  });
  const segments = [
    { label: "فیزیکی", value: "physical" },
    { label: "دیجیتالی", value: "digital" },
  ];
  return (
    <Background paddingTop={32}>
      <Box style={{ paddingHorizontal: 16 }}>
        <SegmentedControl
          segments={segments}
          value={tab}
          onChange={setTab}
          style={{ height: 48 }}
        />
      </Box>
      <Box style={{ paddingHorizontal: 16 }}>
        <Text align="center" weight="medium">
          {tab === "physical" ? "فهرست فیزیکی" : "فهرست دیجیتالی"}
        </Text>
      </Box>
    </Background>
  );
}

export default Purchased;
