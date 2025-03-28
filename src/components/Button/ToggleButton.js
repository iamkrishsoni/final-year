import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import "nativewind";

const ToggleButton = ({ title }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View className="flex-row items-center bg-white px-4 py-2 rounded-full border border-[#C8D5B9]">
      <Text className="flex-1 text-lg text-[#736B66]">{title}</Text>
      <Switch
        trackColor={{ false: "#ccc", true: "#C8D5B9" }}
        thumbColor={isEnabled ? "#FFB800" : "#f4f3f4"}
        ios_backgroundColor="#ccc"
        onValueChange={toggleSwitch}
        value={isEnabled}
        className="scale-125"
      />
    </View>
  );
};

export default ToggleButton;
