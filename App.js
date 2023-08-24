import { useCallback } from "react";
import Home from "./pages/home/home";
import Lista from "./pages/lista/lista";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded] = useFonts({
    slabo: require("./assets/fonts/Slabo.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={handleOnLayout}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="home"
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="lista" component={Lista} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
