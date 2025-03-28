import React, { useState } from "react";
import { View, TextInput, Text, Image } from "react-native";

const Input = ({
  label,
  placeholder,
  icon,
  custom_css,
  value,
  onChangeText,
}) => {
  return (
    <View className="flex">
      {label && (
        <Text className="text-md font-bold text-[#4F3422] mb-2">{label}</Text>
      )}
      <View className="flex-row items-center bg-white border border-[#a0a589] rounded-full px-4 h-[4rem] w-full">
        <Image source={icon} className={`${custom_css} mr-4`} />
        <TextInput
          className="flex-1 text-base text-[#4F3422]"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default Input;
