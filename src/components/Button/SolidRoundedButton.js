import "nativewind";
import React from "react";
import { TouchableOpacity, Image } from "react-native";

const RoundedButton = ({ onPress, icon, custom_css }) => {
  return (
    <TouchableOpacity
      className={`h-[5rem] w-[5rem] bg-[#4F3422] rounded-full flex items-center justify-center`}
      onPress={onPress}
    >
      <Image source={icon} alt="" className={`${custom_css}`} />
    </TouchableOpacity>
  );
};

export default RoundedButton;
