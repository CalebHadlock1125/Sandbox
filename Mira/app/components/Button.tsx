import React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  className = "",
}) => {
  const baseStyle = "py-4 px-8 rounded-lg items-center justify-center";
  const variantStyle = variant === "primary" ? "bg-black" : "bg-gray-200";

  return (
    <TouchableOpacity
      className={`${baseStyle} ${variantStyle} ${className}`}
      onPress={onPress}
    >
      <Text
        className={`font-semibold text-lg ${
          variant === "primary" ? "text-white" : "text-black"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
