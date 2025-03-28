import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";

const ChatWithUs = ({ title, icon, onPress, custom_css }) => {
  return (
    <TouchableOpacity
      className={`flex flex-row items-center rounded-[40px] px-8 py-2 justify-between ${custom_css}`}
      onPress={onPress}
    >
      <Text className="text-[#F09E54] font-bold text-lg">{title}</Text>
      <Image source={icon} alt="" className="w-12 h-12" />
    </TouchableOpacity>
  );
};

export default ChatWithUs;
