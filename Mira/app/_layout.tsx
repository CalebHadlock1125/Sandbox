import { Stack } from "expo-router";
import "/global.css"; // Add this for NativeWind

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="goal-selection" />
      <Stack.Screen name="personal-info" />
      <Stack.Screen name="meet-coach" />
      <Stack.Screen name="plan-ready" />
    </Stack>
  );
}
