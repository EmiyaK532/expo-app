import { Stack } from "expo-router";
import { View } from "react-native";
import { Theme } from "@/constants/Theme";

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: Theme.colors.background }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Theme.colors.background },
        }}
      />
    </View>
  );
}
