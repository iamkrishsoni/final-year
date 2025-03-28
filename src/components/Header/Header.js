import React from "react";
import {
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import avatar from "../../../assets/images/profile.jpg";
import notification from "../../../assets/icon/notification.png";
import sound_mute from "../../../assets/icon/sound_mute.png";

const Header = ({ title, icon, navigation }) => {
  return (
    <View className="flex flex-row items-center justify-between px-6 py-3">
      <TouchableOpacity
        className="flex justify-center items-center bg-[#F09E5447] p-3 rounded-full"
        onPress={() => navigation.navigate("Account")}
      >
        <Image source={avatar} alt="" className="w-[2.5rem] h-[2.5rem] rounded-full" />
      </TouchableOpacity>
      <View className="flex flex-row items-center gap-x-6">
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Image source={sound_mute} alt="" className="w-8 h-8" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("NotificationAlerts")}>
          <Image source={notification} alt="" className="w-8 h-8" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
