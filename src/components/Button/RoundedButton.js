import "nativewind";
import React from "react";
import { TouchableOpacity, Image } from "react-native";

const RoundedButton = ({ onPress, icon, custom_css }) => {
  return (
    <TouchableOpacity
      className={`border-[#C9C7C5] border-[1px] h-[4rem] w-[4rem] rounded-full flex items-center justify-center`}
      onPress={onPress}
    >
      <Image source={icon} alt="" className={`${custom_css}`} />
    </TouchableOpacity>
  );
};

export default RoundedButton;
