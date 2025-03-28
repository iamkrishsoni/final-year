import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const OptionButton = ({ label, isSelected, onPress, color, border }) => {
  return (
    <TouchableOpacity
      className={`flex-row items-center justify-between rounded-full px-6 py-6 my-1 ${
        isSelected ? `bg-[${color}]` : "bg-white"
      }`}
      onPress={onPress}
    >
      <Text
        className={`text-xl w-[90%] font-medium ${
          isSelected ? "text-white" : "text-[#4B3829]"
        }`}
      >
        {label}
      </Text>
      <View
        className={`h-5 w-5 rounded-full border-[2px] items-center justify-center ${
          isSelected ? "border-white bg-white" : `border-[${border}]`
        }`}
      >
        <View
          className={`h-3 w-3 rounded-full border-[2px] items-center justify-center ${
            isSelected ? `border-[${border}]` : "border-white bg-white"
          }`}
        />
      </View>
    </TouchableOpacity>
  );
};

export default OptionButton;
