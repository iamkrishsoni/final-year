import "nativewind";
import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

const Button = ({ text, onPress, icon, custom_css }) => {
  return (
    <TouchableOpacity
      className={`bg-[#4F3422] h-[4rem] rounded-full w-full flex items-center justify-center ${custom_css}`}
      onPress={onPress}
    >
      <Text className="text-white text-center text-xl font-semibold">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
