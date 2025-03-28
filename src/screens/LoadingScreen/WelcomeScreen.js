import "nativewind";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Button from "../../components/Button/SolidRoundedButton";
import right_arrow from "../../../assets/icon/right_arrow.png";
import welcome from "../../../assets/bg/welcome.png";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View className="h-full w-full flex items-center bg-white justify-between">
      <View className="mt-20 py-6 w-full flex items-center gap-y-6">
        <Text className="border-[2px] border-[#4F3422] text-[#4F3422] text-xl px-4 py-2 rounded-3xl font-semibold text-center">
          Welcome
        </Text>
        <Image source={welcome} alt="" className="w-[30rem] h-[30rem]" />
      </View>
      <View className="bg-white rounded-t-[260px] h-[40rem] px-[6rem] items-center gap-y-10 mt-[-4rem] py-[6rem] shadow-black shadow-2xl w-[40rem] flex">
        <Text className="text-[#4F3422] text-4xl font-bold text-center leading-12">
          You're just a step away from your{" "}
          <Text className="text-[#FFBE16]">"Architecture"</Text>
        </Text>
        <Button
          icon={right_arrow}
          alt=""
          custom_css="w-6 h-4"
          onPress={() => navigation.navigate("SelectMode")}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
