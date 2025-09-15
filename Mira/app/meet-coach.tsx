import React from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "./components/Button";

export default function MeetCoach() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 justify-center items-center">
      <View className="items-center mb-16">
        <View className="w-24 h-24 bg-gray-200 rounded-full mb-8 items-center justify-center">
          <Text className="text-3xl">🤖</Text>
        </View>

        <Text className="text-3xl font-bold text-center mb-8">
          Meet your AI coach
        </Text>

        <Text className="text-lg text-gray-600 text-center leading-relaxed">
          I'll guide you, track your progress, and adjust your plan if things
          change
        </Text>
      </View>

      <View className="w-full px-4">
        <Button title="Let's Go" onPress={() => router.push("./plan-ready")} />
      </View>
    </View>
  );
}
