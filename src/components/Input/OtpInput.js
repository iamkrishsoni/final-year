import React from "react";
import { View, TextInput, Text } from "react-native";

const OtpInput = ({
  placeholder,
  value,
  onChangeText,
  maxLength,
  onSubmitEditing,
}) => {
  return (
    <View className="flex">
      <View className="flex-row items-center rounded-full px-4 h-[6rem] w-[4.5rem] bg-[#A3FEC3] border-4 border-[#3b5c4695]">
        <TextInput
          className="flex-1 text-4xl font-extrabold text-[#4F3422] text-center"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          maxLength={maxLength}
          keyboardType="number-pad"
          onSubmitEditing={onSubmitEditing} // Trigger the next input focus
          blurOnSubmit={false} // Keep keyboard open
        />
      </View>
    </View>
  );
};

export default OtpInput;
