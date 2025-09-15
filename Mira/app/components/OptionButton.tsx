import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface OptionButtonProps {
  title: string;
  isSelected: boolean;
  onPress: () => void;
}

export const OptionButton: React.FC<OptionButtonProps> = ({
  title,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className={`py-4 px-6 rounded-lg border-2 mb-3 ${
        isSelected ? "border-black bg-black" : "border-gray-300 bg-white"
      }`}
      onPress={onPress}
    >
      <Text
        className={`text-center font-medium ${
          isSelected ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
