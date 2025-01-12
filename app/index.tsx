import { Text, View } from "react-native";

import {
  Poppins_400Regular,
  useFonts,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { HeroSection } from "../components/hero-section";
import { AboutMe } from "../components/about-me";
import { Skills } from "../components/skills";

import AppLoading from "expo-app-loading";

import { ScrollView } from "react-native";

import { Project } from "@/components/project";

import { MailMe } from "@/components/mail-me";
import { Fotter } from "@/components/footer";

export default function Index() {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-Bold": Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={{ flex: 1 }}>

      <HeroSection />

      <AboutMe />

      <Skills/>

      <Project/>

      <MailMe/>

      <Fotter/>
    </ScrollView>
  );
}
