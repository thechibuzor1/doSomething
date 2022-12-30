import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation";
import Projects from "./screens/Projects";
import Screen2 from "./screens/Screen2";
import ChatHome from "./screens/ChatHome";
import New from "./screens/New";


export default function StackNav() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
    animationEnabled: false,
    presentation: "modal",
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="" screenOptions={screenOptions}>
        <Stack.Screen name="Tab" component={RootNavigation} />
        <Stack.Screen name="Info" component={Screen2} />
        <Stack.Screen name="Chat" component={ChatHome} />
        <Stack.Screen
          name="New"
          component={New}
          options={{ animationEnabled: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
