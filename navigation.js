import Home from "./screens/Home";

import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import { View } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Projects from "./screens/Projects";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function RootNavigation({ navigation }) {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Home") {
        iconName = focused ? "square" : "square-outline";
      } else if (route.name === "Settings") {
        iconName = focused ? "ios-list" : "ios-list-outline";
      } else if (route.name === "Screen2") {
        iconName = focused ? "clipboard" : "clipboard-outline";
      } else if (route.name === "Screen3") {
        iconName = focused ? "notifications" : "notifications-outline";
      } else if (route.name === "Screen4") {
        iconName = focused ? "search" : "search-outline";
      } else {
        iconName = "add-circle";
        size = 40;
        color = "blue";
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "#ffffff",
    tabBarInactiveTintColor: "gray",
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
      backgroundColor: "#000000",
      borderTopWidth: 0,
    },
    tabBarShowLabel: false,
  });

  const Tab = createBottomTabNavigator();

  const ModalCom = () => (
    <View style={{ flex: 1, backgroundColor: "blue" }}></View>
  );

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Screen2" component={Projects} />
      <Tab.Screen
        name="Add"
        component={ModalCom}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate("New");
          },
        })}
      />
      <Tab.Screen name="Screen3" component={Screen3} />
      <Tab.Screen name="Screen4" component={Screen4} />
    </Tab.Navigator>
  );
}
