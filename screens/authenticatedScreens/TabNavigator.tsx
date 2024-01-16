import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import ProfileScreen from "./Profile";
import CartScreen from "./Cart";
import { theme } from "../../contsants/Theme";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

type Screen = {
  StackType: any;
  name: string;
  component: any;
  title?: string;
  headerShown?: boolean;
  iconName?: any;
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
    icon: "shoppingcart",
  },
];

function createTabScreen({
  StackType,
  name,
  component,
  title,
  headerShown = true,
  iconName,
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
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <AntDesign name={iconName} size={size} color={color} />
        ),
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
          tabBarActiveTintColor: theme.primary,
          tabBarInactiveTintColor: theme.gray,
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
