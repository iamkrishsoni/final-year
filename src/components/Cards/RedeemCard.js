import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ProgressCard = ({
  onPress,
  icon,
  title,
  subtitle,
  points,
  bg_color,
  text_color,
}) => {
  return (
    <TouchableOpacity
      className={`${bg_color} p-4 rounded-[20px] w-full flex flex-row gap-x-4 items-center`}
      onPress={onPress}
    >
      <View className="flex">
        <Image source={icon} alt="" className="w-[4.2rem] h-[4.2rem]" />
      </View>
      <View className="flex gap-y-1">
        <Text className="text-black text-xl font-bold">{title}</Text>
        <Text className="text-[#8F92A1] text-sm">{subtitle}</Text>
        <View className="flex flex-row">
          <Text className={`text-md font-semibold ${text_color}`}>
            {points} points
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProgressCard;
