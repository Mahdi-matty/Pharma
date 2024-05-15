import {  Text, View } from "react-native";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
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
