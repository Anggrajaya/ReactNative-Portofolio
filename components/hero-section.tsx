import {
  Text,
  View,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  Poppins_400Regular,
  useFonts,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import Ionicons from "@expo/vector-icons/Ionicons";

const HeroSection = () => {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-Bold": Poppins_700Bold,
  });

  const openLinkedIn = () => {
    const linkedInUrl =
      "https://www.linkedin.com/in/anggraena-wijaya-1a98152b1/";
    Linking.openURL(linkedInUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const downloadCv = () => {
    const linkedInUrl =
      "https://drive.google.com/uc?export=download&id=1AoVBST5bJUJLX6DrTpP5BZ7Z4rEMoaeA";
    Linking.openURL(linkedInUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const openInstagram = () => {
    const instagramUrl = "https://www.instagram.com/wijaya.anggraena/";
    Linking.openURL(instagramUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const openGitHub = () => {
    const githubUrl = "https://github.com/Anggrajaya";
    Linking.openURL(githubUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };
  return (
    <View
      style={{
        height: "auto",
        padding: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 83,
      }}
    >
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
        }}
        source={require("../assets/images/personal-photo.jpg")}
      />
      <Text
        style={{
          marginTop: 20,
          fontSize: 20,
          fontFamily: "Poppins-Bold",
          color: "#555555",
        }}
      >
        Hello, I'M a
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Poppins-Bold",
          color: "#333",
        }}
      >
        Anggraena Wijaya
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Poppins-Bold",
          color: "#555555",
        }}
      >
        Frontend Developer
      </Text>

      <View
        style={{
          margin: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TouchableOpacity style={styles.button1} onPress={downloadCv}>
          <Text style={styles.buttonText1}>Download CV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={openLinkedIn}>
          <Text style={styles.buttonText2}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TouchableOpacity onPress={openInstagram}>
          <Ionicons name="logo-instagram" size={35} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity onPress={openGitHub}>
          <Ionicons name="logo-github" size={35} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button1: {
    padding: 10,
    borderWidth: 2,
    width: 150,
    borderColor: "#333",
    borderRadius: 30,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText1: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  button2: {
    padding: 10,
    borderWidth: 2,
    width: 150,
    borderRadius: 30,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText2: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { HeroSection };
