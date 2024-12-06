import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import "@expo/metro-runtime";

import { Routes } from "./src/routes";
import { WorkoutRegistration } from "@screens/WorkoutRegistration";
import { ClientRegistration } from "@screens/ClientRegistration";
import { Profile } from "@screens/Profile";
import { Home } from "@screens/Home";
import { Program } from "@screens/program";
import { HomePersonal } from "@screens/HomePersonal";

import { THEME } from "./src/theme";
import { Loading } from "./src/components/loading";

import { AuthProvider } from "src/context/authContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <AuthProvider>
      <NativeBaseProvider theme={THEME}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </NativeBaseProvider>
    </AuthProvider>
  );
}
