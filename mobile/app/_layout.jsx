import { Stack } from "expo-router";
import SafeScreen from "../components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {

  
  //there is a white header on top when you open expo on phone, to remove that add after stack: return <Stack screenOptions={{ headerShown: false }}/>;
  //return <Stack />;

  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <SafeScreen>
        <Stack screenOptions={{ headerShown: false}} />
      </SafeScreen>
      <StatusBar style="dark" />
    </ClerkProvider>
  );
}
