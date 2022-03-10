import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/native-stack";
import { Home, Pokedex } from "@screens";
import { ThemeProvider } from "styled-components";
import { theme } from "@themes";
const App = () => {
  let [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator();
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Pokedex" component={Pokedex} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
