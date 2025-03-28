import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const OptionsInput = ({ label, options, value, onValueChange }) => {
  return (
    <View className="w-full mb-4">
      {label && (
        <Text className="text-md font-bold text-[#4F3422] mb-2">{label}</Text>
      )}
      <View className="bg-white border border-[#a0a589] rounded-full h-16 justify-center">
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onValueChange(itemValue)}
          style={{ color: "#4F3422" }}
        >
          <Picker.Item label="Select an option" value="" />
          {options.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default OptionsInput;
