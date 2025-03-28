import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import home from "../../../assets/icon/footer/home.png";
import homeActive from "../../../assets/icon/footer/active_home.png";
import client from "../../../assets/icon/footer/client.png";
import clientActive from "../../../assets/icon/footer/active_client.png";
import calender from "../../../assets/icon/footer/calender.png";
import calenderActive from "../../../assets/icon/footer/active_calender.png";
import habit from "../../../assets/icon/footer/habit.png";
import habitActive from "../../../assets/icon/footer/active_habit.png";

const Footer = ({ navigation, activeTab, active }) => {
  return (
    <View className="flex-row justify-around items-center bg-white pb-6 shadow-lg">
      <TouchableOpacity
        className="flex-1 items-center gap-y-4"
        onPress={() => navigation.navigate("Home")}
      >
        <View
          className={`bg-${
            active === "Home" ? "#FE8235" : "white"
          } w-4 h-2 rounded-b-[300px]`}
        />
        <Image
          alt="Home"
          source={activeTab === "Home" ? homeActive : home}
          className="w-8 h-8"
        />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-1 items-center gap-y-4"
        onPress={() => navigation.navigate("Calender")}
      >
        <View
          className={`bg-${
            active === "Calender" ? "blue-500" : "white"
          } w-4 h-2 rounded-b-[300px]`}
        />
        <Image
          alt="Calender"
          source={activeTab === "Calender" ? calenderActive : calender}
          className="w-8 h-8"
        />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-1 items-center gap-y-4"
        onPress={() => navigation.navigate("ClientDashboard")}
      >
        <View
          className={`bg-${
            active === "Client" ? "blue-500" : "white"
          } w-4 h-2 rounded-b-[300px]`}
        />
        <Image
          alt="Client Dashboard"
          source={activeTab === "Client" ? clientActive : client}
          className="w-8 h-8"
        />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-1 items-center gap-y-4"
        onPress={() => navigation.navigate("HabitBuilding")}
      >
        <View
          className={`bg-${
            active === "Habit" ? "blue-500" : "white"
          } w-4 h-2 rounded-b-[300px]`}
        />
        <Image
          alt="Habit Building"
          source={activeTab === "Habit" ? habitActive : habit}
          className="w-8 h-8"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
