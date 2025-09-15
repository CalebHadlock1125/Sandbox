import React from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "./components/Button";

export default function PlanReady() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <View className="items-center mb-12">
        <Text className="text-3xl font-bold text-center mb-12">
          Your plan is ready!
        </Text>

        <View className="w-full bg-gray-50 rounded-xl p-6 mb-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-gray-600">Daily Calories</Text>
            <Text className="font-bold text-lg">2,100</Text>
          </View>

          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-gray-600">Workouts</Text>
            <Text className="font-bold text-lg">4/week</Text>
          </View>

          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-gray-600">Weekly Goal</Text>
            <Text className="font-bold text-lg">-1 lb</Text>
          </View>

          <View className="flex-row justify-between items-center">
            <Text className="text-gray-600">Time Commitment</Text>
            <Text className="font-bold text-lg">45 min</Text>
          </View>
        </View>
      </View>

      <View className="w-full px-4">
        <Button
          title="Go to Home"
          onPress={() => {
            // Navigate to home or main app
            console.log("Navigate to home");
          }}
        />
      </View>
    </View>
  );
}
