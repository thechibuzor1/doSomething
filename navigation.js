import Home from "./screens/Home";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import { Modal } from "react-native";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Projects from "./screens/Projects";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function RootNavigation() {
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
    headerShown: false,
    tabBarStyle: {
      backgroundColor: "#000000",
      borderTopWidth: 0,
    },
    tabBarShowLabel: false,
  });

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Screen2" component={Projects} />
      <Tab.Screen name="Add" component={Screen2} />
      <Tab.Screen name="Screen3" component={Screen3} />
      <Tab.Screen name="Screen4" component={Screen4} />
    </Tab.Navigator>
  );
}
