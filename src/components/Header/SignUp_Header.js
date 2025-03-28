import React from "react";
import { Text, ImageBackground } from "react-native";
import header_bg from "../../../assets/bg/header_bg.png";

const SignUp_Header = ({ title }) => {
  return (
    <ImageBackground
      source={header_bg}
      className="h-[30%] w-full bg-[#F7F4F2] rounded-b-3xl flex items-center justify-center"
    >
      <Text className="text-4xl font-bold text-white">{title}</Text>
    </ImageBackground>
  );
};

export default SignUp_Header;
