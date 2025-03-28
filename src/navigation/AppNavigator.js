import "../../assets/global.css";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/LoadingScreen/WelcomeScreen";
import SelectMode from "../screens/LoadingScreen/SelectMode";
import Question from "../screens/Questions/Question";
import Result from "../screens/Questions/Result";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SelectMode" component={SelectMode} />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
