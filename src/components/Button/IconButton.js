import "nativewind";
import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

const IconButton = ({ text, onPress, icon, custom_css }) => {
  return (
    <TouchableOpacity
      className={`bg-[#4F3422] h-[4rem] rounded-full w-full flex flex-row items-center justify-center ${custom_css}`}
      onPress={onPress}
    >
      <Text className="text-white text-center text-xl font-semibold">{text}</Text>
      <Image source={icon} alt="" className="w-9 h-5 ml-4" />
    </TouchableOpacity>
  );
};

export default IconButton;
