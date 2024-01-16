import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContextProvider, { AuthContext } from "./store/authContext";

import LaunchScreen from "./screens/LaunchScreen";
import LoginScreen from "./screens/login/LoginScreen";
import HomeScreen from "./screens/authenticatedScreens/HomeScreen";
import ResturantList from "./screens/authenticatedScreens/ResturantList";
import MenuScreen from "./screens/authenticatedScreens/MenuScreen";
import SignUpForm from "./components/UI/SignUpForm";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

//Non Authenticated Screens
const NonAuthScreens = [
  {
    name: "LaunchScreen",
    component: LaunchScreen,
    title: "Welcome",
    headerShown: false,
  },
  {
    name: "Login",
    component: LoginScreen,
    title: "Login",
    headerShown: false,
  },
  {
    name: "SignUp",
    component: SignUpForm,
    title: "Sign Up",
    headerShown: false,
  },
];

const screens = [
  { name: "Home", component: HomeScreen, title: "Home" },
  { name: "ResturantList", component: ResturantList, title: "Resturants" },
  { name: "Menu", component: MenuScreen, title: "Menu" },
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authCtx = useContext(AuthContext);
  console.log("Inside App authCtx", authCtx);

  useEffect(() => {
    async function fetchToken() {
      const token = await AsyncStorage.getItem("token");
      token && authCtx.authenticate(token);
      console.log("ApptokenToken", token);
      console.log("ApptokenCtx", authCtx.isAuthenticated);
    }
    fetchToken();
  }, []);

  useEffect(() => {
    console.log("Inside App authCtxc");
    setIsLoggedIn(authCtx.isAuthenticated);
  }, [authCtx.isAuthenticated]);

  return (
    <AuthContextProvider>
      <ImageBackground
        style={styles.backgroundImage}
        imageStyle={{ zIndex: 0 }}
        source={require("./assets/Images/BackgroundScreen.png")}
        resizeMode="cover"
      >
        <StatusBar style="dark" />
        <SafeAreaView style={styles.startScreen}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                contentStyle: { backgroundColor: "transparent" },
              }}
            >
              {isLoggedIn
                ? screens.map((screen) => createScreen(screen))
                : NonAuthScreens.map((screen) => createScreen(screen))}
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ImageBackground>
    </AuthContextProvider>
  );
}

type Screen = {
  name: string;
  component: any;
  title?: string;
  headerShown?: boolean;
};

function createScreen({ name, component, title, headerShown = true }: Screen) {
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
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' or 'contain'
  },
});
