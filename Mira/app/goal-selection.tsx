import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "./components/Button";
import { OptionButton } from "./components/OptionButton";

const healthGoals = [
  "Build Strength",
  "Lose Fat",
  "Get Toned",
  "Gain Muscle",
  "Stay Healthy & Fit",
  "Increase Cardio Endurance",
  "Everyday Strength & Mobility",
];

export default function GoalSelection() {
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 pt-16">
        <Text className="text-3xl font-bold text-center mb-8">
          What type of health goal are you working towards?
        </Text>

        <View className="mb-8">
          {healthGoals.map((goal) => (
            <OptionButton
              key={goal}
              title={goal}
              isSelected={selectedGoal === goal}
              onPress={() => setSelectedGoal(goal)}
            />
          ))}
        </View>
      </ScrollView>

      <View className="px-6 pb-8">
        <Button
          title="Continue"
          onPress={() => router.push("./personal-info")}
          className={selectedGoal ? "" : "opacity-50"}
        />
      </View>
    </View>
  );
}
