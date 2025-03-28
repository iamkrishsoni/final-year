import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import menu from "../../../assets/icon/menu.png";

const Buddy_Header = ({ title, icon, navigation }) => {
  return (
    <View className="flex flex-row items-center justify-between px-6 py-4">
      <Text className="text-2xl capitalize text-[#573926] font-semibold">
        {title}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate()}>
        <Image source={menu} alt="" className="w-10 h-10" />
      </TouchableOpacity>
    </View>
  );
};

export default Buddy_Header;
