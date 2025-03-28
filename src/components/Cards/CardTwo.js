import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";

const CardOne = ({ title, icon, onPress, custom_css }) => {
  return (
    <TouchableOpacity
      className={`flex rounded-[40px] items-center justify-center gap-y-2 px-6 py-4 w-[13rem] h-[13rem] ${custom_css}`}
      onPress={onPress}
    >
      <Image source={icon} alt="" className="w-[7rem] h-[7rem]" />
      <Text className="text-white font-bold text-lg text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default CardOne;
