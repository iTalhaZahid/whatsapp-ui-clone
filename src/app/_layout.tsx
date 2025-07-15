import { Stack } from "expo-router";

// Replace this with your real auth logic or context
const isLoggedIn = false;

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
  
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(main)"/>  
        </Stack.Protected> 
     
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="(auth)"/>  
          </Stack.Protected> 

    </Stack>
  );
}
