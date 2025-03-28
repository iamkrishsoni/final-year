import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import back from "../../../assets/icon/Back.png";

const Question_Header = ({
  title,
  navigation,
  custom_css,
  current_question,
  questions_total,
}) => {
  return (
    <View className={`pt-20 bg-[#F7F4F2] ${custom_css}`}>
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row gap-x-6 items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-full w-[4rem] h-[4rem] flex items-center justify-center border-[1px] border-[#4F3422]"
          >
            <Image source={back} alt="" className="w-[0.7rem] h-[1.7rem]" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#4F3422]">{title}</Text>
        </View>
        <Text className="text-md font-semibold text-[#4F3422] bg-[#E8DDD9] px-3 py-2 rounded-full">
          {current_question} of {questions_total}
        </Text>
      </View>
    </View>
  );
};

export default Question_Header;
