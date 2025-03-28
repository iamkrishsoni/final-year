import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import "./assets/global.css";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";
import store from "./src/redux/store";
enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
