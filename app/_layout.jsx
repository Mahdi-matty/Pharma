import {  Text, View } from "react-native";
import { Slot, Stack, SplashScreen } from "expo-router";
import {useFont} from 'expo-font'
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync()
const RootLayout = () => {
  const [fontsLoaded, error] = useFont({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if(!fontsLoaded && !error) return null;



  return (
    <>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </>
  );
};

// const RootLayout = ()=>{
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{headerShown: false}}/>
//     </Stack> 
//   )
// }

export default RootLayout;
