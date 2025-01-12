import {
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";

// import {
//   Poppins_400Regular,
//   useFonts,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";

import Ionicons from "@expo/vector-icons/Ionicons";

const AboutMe = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 100,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 20,
            color: "#555555",
          }}
        >
          Get To Know About Me
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 30,
            color: "#555555",
          }}
        >
          About Me
        </Text>
        <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 50,
          }}
          source={require("../assets/images/personal-photo-monocrom.jpg")}
        />
        <View style={styles.exprience_frame}>
          <Ionicons name="briefcase" size={35} color="#333" />
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 20,
              marginTop: 10,
            }}
          >
            Experience
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 15,
              textAlign: "center",
            }}
          >
            Has contributed to 2 major professional projects including Bank BPD
            DIY middleware and BeOne HRIS system
          </Text>
        </View>

        <View style={styles.exprience_frame}>
          <Ionicons name="accessibility" size={35} color="#333" />
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 20,
              marginTop: 10,
            }}
          >
            Certification
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 15,
              textAlign: "center",
            }}
          >
            has 2 international standard certificates, including the Oracle
            Database Foundation and the Viera Toiec certificate.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exprience_frame: {
    marginTop: 30,
    borderWidth: 2,
    width: 350,
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderColor: "#333",
    borderRadius: 30,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});

export {AboutMe}
