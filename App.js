import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LaunchScreen from "./screens/LaunchScreen";
import LoginScreen from "./screens/login/LoginScreen";
import SignUpScreen from "./screens/signup/SignUpScreen";
import HomeScreen from "./screens/authenticatedScreens/HomeScreen";
import ResturantList from "./screens/authenticatedScreens/ResturantList";
import MenuScreen from "./screens/authenticatedScreens/MenuScreen";

const Stack = createNativeStackNavigator();

//Non Authenticated Screens
const NonAuthScreens = [
  { name: "LaunchScreen", component: LaunchScreen, title: "Welcome" },
  { name: "LoginScreen", component: LoginScreen, title: "Login" },
  { name: "SignUpScreen", component: SignUpScreen, title: "Sign Up" },
];

const screens = [
  { name: "Home", component: HomeScreen, title: "Home" },
  { name: "ResturantList", component: ResturantList, title: "Resturants" },
  { name: "Menu", component: MenuScreen, title: "Menu" },
];

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.startScreen}>
        <NavigationContainer>
          {loggedIn ? screens.map(createScreen) : NonAuthScreens.map(createScreen)}
        </NavigationContainer>
        <LaunchScreen />
      </SafeAreaView>
    </>
  );
}

function createScreen({ name, component, title, headerShown = true }) {
  return (
    <Stack.Screen
      key={name}
      name={name}
      component={component}
      options={{
        title: title,
        headerTitleAlign: "center",
        headerShown: headerShown && Boolean(title),
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startScreen: {
    flex: 1,
    // justifyContent: "center",
  },
});
