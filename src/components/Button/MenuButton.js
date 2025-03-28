import "nativewind";
import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import right_arrow from "../../../assets/icon/rightarrow.png";

const MenuButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      className={`bg-white h-[4.5rem] rounded-full w-full flex flex-row items-center justify-between px-6 shadow-md`}
      onPress={onPress}
    >
      <Text className="text-[#4F3422] text-center text-xl font-semibold">
        {text}
      </Text>
      <Image source={right_arrow} alt="" className="w-9 h-5 ml-4" />
    </TouchableOpacity>
  );
};

export default MenuButton;
