import React from "react";
import {
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import header_bg from "../../../assets/bg/header_bg.png";
import avatar from "../../../assets/images/avatar.png";

const Profile_Header = ({ title, icon, navigation }) => {
  return (
    <View className="h-[23rem] bg-[#F7F4F2]">
      <ImageBackground
        source={header_bg}
        className="h-[17rem] w-fit rounded-b-3xl flex pt-20 gap-x-6 px-6 justify-between"
      >
        <View className="flex flex-row gap-x-6 items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-full w-[4rem] h-[4rem] flex items-center justify-center border-[1px] border-[#4F3422]"
          >
            <Image source={icon} alt="" className="w-[0.7rem] h-[1.7rem]" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#4F3422]">{title}</Text>
        </View>
      </ImageBackground>
      <View className="flex w-full items-center mt-[-6rem] z-50">
        <Image source={avatar} alt="" className="w-[10rem] h-[10rem]" />
      </View>
    </View>
  );
};

export default Profile_Header;
