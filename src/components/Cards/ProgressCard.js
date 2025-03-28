import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import bar from "../../../assets/icon/bar.png";

const ProgressCard = ({ onPress }) => {
  return (
    <TouchableOpacity
      className="bg-white px-3 pb-3 rounded-[40px] shadow-lg w-[13rem] h-[15rem]"
      onPress={onPress}
    >
      <Text className="text-xl font-bold text-[#4F3422] pl-4 pt-4">
        Your Progress Today
      </Text>
      <View className="flex items-center pt-4">
        <Image source={bar} alt="" className="w-[6.5rem] h-[6.5rem]" />
      </View>
    </TouchableOpacity>
  );
};

export default ProgressCard;
