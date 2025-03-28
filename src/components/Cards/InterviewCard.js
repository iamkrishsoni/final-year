import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import green_right_arrow from "../../../assets/icon/green_right_arrow.png";

const InterviewCard = ({
  title,
  icon,
  subtitle,
  subtitle_2,
  content,
  onPress,
  button_text,
  bottom_text,
  card_bg,
}) => {
  return (
    <View
      className={`flex flex-row rounded-[20px] shadow-black shadow-xl ${card_bg}`}
    >
      <View className="flex p-5 w-[65%] gap-y-2">
        <Text className="text-[20px] text-white font-bold">{title}</Text>
        <Text className="text-sm text-white">{subtitle}</Text>
        <Text className="text-sm text-white">{subtitle_2}</Text>
        <Text className="text-sm text-white">{content}</Text>
        <TouchableOpacity
          className="flex flex-row items-center justify-center px-4 w-[10rem] gap-x-2 py-4 mt-2 bg-white rounded-full"
          onPress={onPress}
        >
          <Text className="text-md capitalize text-[#53A06E] font-semibold">
            {button_text}
          </Text>
          <Image source={green_right_arrow} alt="" className="w-6 h-4" />
        </TouchableOpacity>
        <Text className="text-xs text-white">{bottom_text}</Text>
      </View>
      <View className="flex items-center justify-center w-[25%]">
        <Image source={icon} alt="" className="w-[8rem] h-[6.2rem]" />
      </View>
    </View>
  );
};

export default InterviewCard;
