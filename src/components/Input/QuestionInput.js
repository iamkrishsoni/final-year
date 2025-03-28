import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import document from "../../../assets/icon/document.png";

const QuestionInput = ({
  placeholder,
  total,
  maxLength,
  value,
  onChangeText,
}) => {
  return (
    <View className="bg-white rounded-[30px] border border-[#D2E2CF] p-5 h-[15rem] w-full shadow-sm flex justify-between">
      <TextInput
        className="bg-white p-3 text-gray-700 flex flex-wrap text-wrap text-lg"
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        multiline={true}
        textAlignVertical="top"
        onChangeText={onChangeText}
      />
      <View className="flex flex-row justify-end items-center mt-4">
        <Image source={document} className="w-6 h-6" alt="" />
        <Text className="text-gray-500 ml-2">
          {value.length}/{maxLength || total}
        </Text>
      </View>
    </View>
  );
};

export default QuestionInput;
