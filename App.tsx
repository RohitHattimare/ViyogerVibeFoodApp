import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContextProvider, { AuthContext } from "./store/authContext";
import CartProvider from "./store/CartProvider";

import LaunchScreen from "./screens/LaunchScreen";
import LoginScreen from "./screens/login/LoginScreen";
import MenuScreen from "./screens/authenticatedScreens/MenuScreen";
import SignUpForm from "./components/UI/SignUpForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TabNavigator from "./screens/authenticatedScreens/TabNavigator";
import Resturants from "./screens/authenticatedScreens/ResturantList";

const Stack = createNativeStackNavigator();

type Screen = {
  StackType: any;
  name: string;
  component: any;
  title?: string;
  headerShown?: boolean;
};

//Non Authenticated Screens
const NonAuthScreens = [
  {
    StackType: Stack,
    name: "LaunchScreen",
    component: LaunchScreen,
    title: "Welcome",
    headerShown: false,
  },
  {
    StackType: Stack,
    name: "Login",
    component: LoginScreen,
    title: "Login",
    headerShown: false,
  },
  {
    StackType: Stack,
    name: "SignUp",
    component: SignUpForm,
    title: "Sign Up",
    headerShown: false,
  },
];

const screens = [
  {
    StackType: Stack,
    name: "Tabs",
    component: TabNavigator,
    title: "TabNavigator",
    headerShown: false,
  },
  {
    StackType: Stack,
    name: "ResturantList",
    component: Resturants,
    title: "Resturants",
    headerShown: true,
  },
  {
    StackType: Stack,
    name: "Menu",
    component: MenuScreen,
    title: "Menu",
    headerShown: true,
  },
];

function AuthStack() {
  return (
    <Stack.Navigator>
      {NonAuthScreens.map((screen) => createStackScreen(screen))}
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  // const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "#000000",
        contentStyle: { backgroundColor: "transparent" },
      }}
    >
      {screens.map((screen) => createStackScreen(screen))}
    </Stack.Navigator>
  );
}

function Root() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const token = await AsyncStorage.getItem("token");
      token && authCtx.authenticate(token);
    }
    fetchToken();
  }, []);

  return <Navigation />;
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authCtx.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <CartProvider>
        <ImageBackground
          style={styles.backgroundImage}
          imageStyle={{ zIndex: 0 }}
          source={require("./assets/Images/BackgroundScreen.png")}
          resizeMode="cover"
        >
          <StatusBar style="dark" />
          <SafeAreaView style={styles.startScreen}>
            <Root />
          </SafeAreaView>
        </ImageBackground>
      </CartProvider>
    </AuthContextProvider>
  );
}

function createStackScreen({
  StackType,
  name,
  component,
  title,
  headerShown,
}: Screen) {
  return (
    <StackType.Screen
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
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' or 'contain'
  },
});
