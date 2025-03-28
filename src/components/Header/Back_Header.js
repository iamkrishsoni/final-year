import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import back from "../../../assets/icon/Back.png";

const Back_Header = ({ title, navigation, custom_css }) => {
  return (
    <View className={`pt-20 bg-[#F7F4F2] ${custom_css} pb-4`}>
      <View className="flex flex-row gap-x-6 items-center">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-full w-[4rem] h-[4rem] flex items-center justify-center border-[1px] border-[#4F3422]"
        >
          <Image source={back} alt="" className="w-[0.7rem] h-[1.7rem]" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-[#4F3422]">{title}</Text>
      </View>
    </View>
  );
};

export default Back_Header;
