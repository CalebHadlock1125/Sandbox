import React from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "./components/Button";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 justify-center items-center">
      <View className="items-center mb-12">
        <Text className="text-4xl font-bold text-center mb-8">
          Welcome to{"\n"}
          <Text className="text-5xl">Mira</Text>
        </Text>
        <Text className="text-xl text-gray-600 text-center mb-8">
          Your adaptive AI health coach
        </Text>

        <View className="flex-row flex-wrap justify-center gap-4 mb-16">
          <Text className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
            Personalized
          </Text>
          <Text className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
            Adaptive
          </Text>
          <Text className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
            Intelligent
          </Text>
        </View>
      </View>

      <View className="w-full px-4">
        <Button
          title="Get Started"
          onPress={() => router.push("./goal-selection")}
        />
      </View>
    </View>
  );
}
