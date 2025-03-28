import "nativewind";
import React, { useState } from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header/Back_Header";
import Card from "../../components/Cards/CardTwo";
import residential from "../../../assets/images/residential.png";
import commercial from "../../../assets/images/commercial.png";

const SelectMode = ({ navigation }) => {
  const [mode, setMode] = useState(null);

  return (
    <View className="h-full w-full flex px-6 bg-[#F7F4F2]">
      <Header title="Design Type" navigation={navigation} />
      <View className="flex items-center justify-center gap-y-10 h-[80vh]">
        <Text className="text-4xl font-semibold">What you wanna build?</Text>
        <>
          <Card
            title="Residential"
            icon={residential}
            custom_css="bg-[#4AD2C9]"
            onPress={() => navigation.navigate("Question")}
          />
          <Card
            title="Commercial"
            icon={commercial}
            custom_css="bg-[#FE8235]"
            onPress={() => navigation.navigate("Question")}
          />
        </>
      </View>
    </View>
  );
};

export default SelectMode;
