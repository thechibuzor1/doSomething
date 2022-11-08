import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Screen2 from "./screens/Screen2";
import Main from "./Main";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";

export default function RootNavigation() {
  const screenOptions = {
    headerShown: false,
    animationEnabled: false,
  };

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
