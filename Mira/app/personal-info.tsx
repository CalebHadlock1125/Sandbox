import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { OptionButton } from "./components/OptionButton";

export default function PersonalInfo() {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const router = useRouter();

  const sexOptions = ["Male", "Female", "Other"];
  const activityOptions = ["Low", "Medium", "High"];

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 pt-16">
        <Text className="text-3xl font-bold text-center mb-8">
          Tell us about yourself
        </Text>

        <Input
          label="Name"
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />

        <Text className="text-gray-700 font-medium mb-2">Sex</Text>
        <View className="mb-4">
          {sexOptions.map((option) => (
            <OptionButton
              key={option}
              title={option}
              isSelected={sex === option}
              onPress={() => setSex(option)}
            />
          ))}
        </View>

        <Text className="text-gray-700 font-medium mb-2">Height</Text>
        <View className="flex-row gap-4 mb-4">
          <View className="flex-1">
            <Input
              label="Feet"
              value={feet}
              onChangeText={setFeet}
              placeholder="5"
              keyboardType="numeric"
            />
          </View>
          <View className="flex-1">
            <Input
              label="Inches"
              value={inches}
              onChangeText={setInches}
              placeholder="10"
              keyboardType="numeric"
            />
          </View>
        </View>

        <Input
          label="Weight (pounds)"
          value={weight}
          onChangeText={setWeight}
          placeholder="150"
          keyboardType="numeric"
        />

        <Text className="text-gray-700 font-medium mb-2">Activity Level</Text>
        <View className="mb-8">
          {activityOptions.map((option) => (
            <OptionButton
              key={option}
              title={option}
              isSelected={activityLevel === option}
              onPress={() => setActivityLevel(option)}
            />
          ))}
        </View>
      </ScrollView>

      <View className="px-6 pb-8">
        <Button title="Continue" onPress={() => router.push("./meet-coach")} />
      </View>
    </View>
  );
}
