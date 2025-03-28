import "nativewind";
import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

const CCButton = ({ text, onPress, icon, custom_css }) => {
  return (
    <TouchableOpacity
      className={`bg-white rounded-full w-full flex flex-row items-center px-4 py-4 gap-x-8 shadow-lg ${custom_css}`}
      onPress={onPress}
    >
      <Image source={icon} alt="" className="w-[6rem] h-[6rem] rounded-full" />
      <Text className="text-[#4F3422] text-center text-2xl font-semibold">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CCButton;
