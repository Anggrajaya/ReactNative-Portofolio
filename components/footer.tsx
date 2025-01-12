import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

const Fotter = () => {
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

  const openLinkedIn = () => {
    const linkedInUrl =
      "https://www.linkedin.com/in/anggraena-wijaya-1a98152b1/";
    Linking.openURL(linkedInUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const openGitLab = () => {
    const linkedInUrl = "https://gitlab.com/Anggrajaya";
    Linking.openURL(linkedInUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
      }}
    >
      <View style={styles.exprience_frame}>
        <TouchableOpacity onPress={openInstagram}>
          <Ionicons name="logo-instagram" size={35} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity onPress={openGitHub}>
          <Ionicons name="logo-github" size={35} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity onPress={openGitLab}>
          <Ionicons name="logo-gitlab" size={35} color="#333" />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "Poppins-Regular",
          color: "#555555",
        }}
      >
        Copyright © 2025 Anggraena Wijaya.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  exprience_frame: {
    marginTop: 30,
    borderWidth: 2,
    width: 350,
    paddingHorizontal: 30,
    flexDirection: "row",
    gap: 20,
    paddingVertical: 40,
    borderColor: "#333",
    borderRadius: 30,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
});

export { Fotter };
