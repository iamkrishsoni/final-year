import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PieChart } from "react-native-chart-kit";

const BountyWalletCard = ({ earnings, remaining, onPress }) => {
  const data = [
    {
      name: "Total Earnings",
      population: earnings,
      color: "#FF7C04",
    },
    {
      name: "Remaining",
      population: remaining,
      color: "#FF9E69",
    },
  ];

  return (
    <TouchableOpacity
      className="bg-white px-3 pb-3 rounded-[40px] shadow-lg"
      onPress={onPress}
    >
      <Text className="text-xl font-bold text-[#4F3422] pl-4 pt-4">
        Bounty Wallet
      </Text>
      <View className="flex items-center justify-center">
        <PieChart
          data={data}
          width={160}
          height={160}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="40"
          hasLegend={false}
          center={[0, 0]}
        />
        <View className="absolute items-center bg-white rounded-full w-[5rem] h-[5rem] justify-center">
          <Text className="text-center text-lg font-bold text-gray-800">
            1,950
          </Text>
          <Text className="text-center text-[8px] text-gray-500">
            Total Earnings
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BountyWalletCard;
