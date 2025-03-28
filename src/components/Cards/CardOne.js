import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import right_arrow from "../../../assets/icon/right_arrow.png";

const CardOne = ({ title, icon, subtitle, content, onPress, button_text }) => {
  return (
    <View className="flex flex-row bg-white rounded-[20px] shadow-black shadow-xl">
      <View className="flex p-5 w-[65%] gap-y-2">
        <Text className="text-[20px] text-[#4F3422] font-bold">{title}</Text>
        <Text className="text-sm text-[#4F3422] font-bold">{subtitle}</Text>
        <Text className="text-sm text-[#4F3422]">{content}</Text>
        <TouchableOpacity
          className="flex flex-row items-center justify-center px-4 w-[10rem] gap-x-2 py-4 mt-2 bg-[#4F3422] rounded-full"
          onPress={onPress}
        >
          <Text className="text-md capitalize text-white font-semibold">
            {button_text}
          </Text>
          <Image source={right_arrow} alt="" className="w-6 h-4" />
        </TouchableOpacity>
      </View>
      <View className="flex items-center justify-center w-[25%]">
        <Image source={icon} alt="" className="w-[8rem] h-[6.2rem]" />
      </View>
    </View>
  );
};

export default CardOne;
