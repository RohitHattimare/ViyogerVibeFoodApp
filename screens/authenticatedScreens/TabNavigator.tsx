import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../contsants/Theme";
import { Entypo } from "@expo/vector-icons";

import ProfileScreen from "./Profile";
import CartScreen from "./Cart/Cart";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

type Screen = {
  StackType: any;
  name: string;
  component: any;
  title?: string;
  headerShown?: boolean;
  icon?: any;
};

const TabScreen = [
  {
    StackType: Tab,
    name: "Home",
    component: HomeScreen,
    title: "Home",
    icon: "home",
  },
  {
    StackType: Tab,
    name: "Profile",
    component: ProfileScreen,
    title: "Profile",
    icon: "user",
  },
  {
    StackType: Tab,
    name: "Cart",
    component: CartScreen,
    title: "Cart",
    icon: "shopping-cart",
  },
];

function createTabScreen({
  StackType,
  name,
  component,
  title,
  headerShown = true,
  icon,
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
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          return (
            // <AntDesign name={icon} size={size} color={color} />
            <Entypo name={icon} size={24} color={color} />
          );
        },
      }}
    />
  );
}

function AuthStack() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      imageStyle={{ zIndex: 0 }}
      source={require("../../assets/Images/BackgroundScreen.png")}
      resizeMode="cover"
    >
      <Tab.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: theme.lightGreen },
          contentStyle: { backgroundColor: "transparent" },
          tabBarStyle: { backgroundColor: theme.lightGreen },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: theme.primary,
        })}
      >
        {TabScreen.map((screen) => createTabScreen(screen))}
      </Tab.Navigator>
    </ImageBackground>
  );
}

function TabNavigator() {
  return <AuthStack />;
}

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "red",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' or 'contain'
  },
});
