import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import right_arrow from "../../../assets/icon/right_arrow.png";

const CardWithButton = ({ title, icon, content, onPress }) => {
  return (
    <TouchableOpacity
      className="flex flex-row bg-white rounded-[20px] shadow-black shadow-xl p-6"
      onPress={onPress}
    >
      <View className="flex w-[65%] gap-y-2">
        <Text className="text-[20px] text-[#4F3422] font-bold">{title}</Text>
        <Text className="text-sm text-[#4F3422]">{content}</Text>
      </View>
      <View className="flex w-[25%]">
        <Image source={icon} alt="" className="w-[8rem] h-[8rem]" />
      </View>
    </TouchableOpacity>
  );
};

export default CardWithButton;
