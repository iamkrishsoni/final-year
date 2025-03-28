import React from "react";
import { View, Text, Image } from "react-native";
import admin from "../../../assets/icon/admin.png";
import { CircularProgress } from "react-native-circular-progress";

const WeeklyProgressCard = ({ title, joined, cancelled, scheduled }) => {
  const total = joined + cancelled + scheduled;
  const joinedPercentage = (joined / total) * 100;
  const cancelledPercentage = (cancelled / total) * 100;
  const scheduledPercentage = (scheduled / total) * 100;

  return (
    <View className="p-5 bg-white rounded-2xl shadow-md items-center">
      <Text className="text-lg font-semibold mb-4">{title}</Text>
      <View className="flex mb-5">
        {/* Scheduled */}
        <CircularProgress
          size={150}
          width={14}
          fill={scheduledPercentage}
          rotation={180}
          lineCap="round"
          tintColor="#FE8235" // Orange for Scheduled
          backgroundColor="#E9ECF1"
        />
        {/* Joined */}
        <CircularProgress
          size={150}
          width={14}
          fill={joinedPercentage}
          rotation={180}
          lineCap="round"
          tintColor="#2B43FF" // Blue for Joined
          backgroundColor="transparent"
          style={{ position: "absolute" }}
        />
        {/* Cancelled */}
        <CircularProgress
          size={150}
          width={14}
          fill={cancelledPercentage}
          rotation={180}
          lineCap="round"
          tintColor="#FFBE16" // Yellow for Cancelled
          backgroundColor="transparent"
          style={{ position: "absolute" }}
        />
        <View className="absolute top-[3rem] left-[4rem] justify-center items-center">
          <View className="bg-[#E9ECF3] p-3 rounded-full">
            <Image source={admin} alt="" className="w-4 h-4" />
          </View>
          <Text className="text-4xl font-bold text-black mt-1">{joined}</Text>
        </View>
      </View>
      <View className="w-full flex flex-row justify-center gap-x-10 mb-2">
        <LegendItem color="bg-[#2B43FF]" label={`Joined ${joined}`} />
        <LegendItem color="bg-[#FFBE16]" label={`Cancelled ${cancelled}`} />
      </View>
      <View className="flex items-center">
        <LegendItem color="bg-[#FE8235]" label={`Scheduled ${scheduled}`} />
      </View>
    </View>
  );
};

// LegendItem Component for reusability
const LegendItem = ({ color, label }) => (
  <View className="flex-row items-center mb-1">
    <View className={`w-3 h-3 rounded-full mr-2 ${color}`} />
    <Text className="text-sm text-black">{label}</Text>
  </View>
);

export default WeeklyProgressCard;
