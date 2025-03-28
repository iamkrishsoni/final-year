import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importing MaterialCommunityIcons

const PasswordInput = ({ label, placeholder, value, onChange, icon, custom_css }) => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View className="flex">
      <Text className="text-[#4B3829] text-md font-bold mb-2">{label}</Text>
      <View className="flex-row items-center bg-white border border-[#a0a589] rounded-full px-4 h-[4rem] w-full">
        <Image 
          source={icon} 
          className={`${custom_css} mr-4`}
          alt=""
        />
        <TextInput
          className="flex-1 text-[#4B3829] text-base"
          placeholder={placeholder}
          secureTextEntry={secureText}
          value={value}
          onChangeText={onChange}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Icon 
            name={secureText ? "eye-off" : "eye"} 
            size={20} 
            color="#B08A62" 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;
