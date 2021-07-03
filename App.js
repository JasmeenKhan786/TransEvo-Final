import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import Icon from "@expo/vector-icons/Entypo";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Loading from "./screens/Loading";
import DriverForm from "./screens/DriverForm";
import PassengerScreen from "./screens/PassengerScreen";
import PassengerForm from "./screens/PassengerForm";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const Switch = createSwitchNavigator({
  Loading: { screen: Loading },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Home: { screen: Home },
});

const DriverTab = createBottomTabNavigator({
  Home: { screen: Home },
  DriverForm: { screen: DriverForm },
});

const PassengerTab = createBottomTabNavigator({
  Home: { screen: Home },
  PassengerForm: { screen: PassengerForm },
  PassengerScreen: { screen: PassengerScreen },
});

const Final = createSwitchNavigator({
  Switch: { screen: Switch },
  DriverTab: { screen: DriverTab },
  PassengerTab: { screen: PassengerTab },
});

const AppContainer = createAppContainer(Final);
