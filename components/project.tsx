import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const Project = () => {
  const openProject1 = () => {
    const githubUrl = "https://gitlab.com/Anggrajaya/testdeploy";
    Linking.openURL(githubUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const openProject2 = () => {
    const githubUrl = "https://beone.bekape.co.id/";
    Linking.openURL(githubUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const openProject3A = () => {
    const githubUrl = "https://github.com/Anggrajaya/Vila_ProfileWebsite";
    Linking.openURL(githubUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const openProject3B = () => {
    const githubUrl = "https://anggrajaya.github.io/Vila_ProfileWebsite/";
    Linking.openURL(githubUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
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
        Get To Know My Project
      </Text>
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 30,
          color: "#555555",
        }}
      >
        Project
      </Text>

      <View style={styles.exprience_frame}>
        <Image
          style={{
            width: 300,
            height: 300,
            borderRadius: 30,
            marginBottom: 20,
          }}
          source={require("../assets/images/project1.png")}
        />
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 20,
            width: 200,
            textAlign: "center",
            color: "#555555",
          }}
        >
          Rawlabs Company Profile
        </Text>
        <TouchableOpacity style={styles.button1} onPress={openProject1}>
          <Text style={styles.buttonText1}>Gitlab</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.exprience_frame}>
        <Image
          style={{
            width: 300,
            height: 300,
            borderRadius: 30,
            marginBottom: 20,
          }}
          source={require("../assets/images/project2.png")}
        />
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 20,
            width: 200,
            textAlign: "center",
            color: "#555555",
          }}
        >
          HRIS BeOne By BKP
        </Text>
        <TouchableOpacity style={styles.button1} onPress={openProject2}>
          <Text style={styles.buttonText1}>Website</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.exprience_frame}>
        <Image
          style={{
            width: 300,
            height: 300,
            borderRadius: 30,
            marginBottom: 20,
          }}
          source={require("../assets/images/project3.png")}
        />
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 20,
            width: 200,
            textAlign: "center",
            color: "#555555",
          }}
        >
          Java Bali Landing Page
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
          <TouchableOpacity style={styles.button1} onPress={openProject3A}>
            <Text style={styles.buttonText1}>Github</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={openProject3B}>
            <Text style={styles.buttonText1}>Demo</Text>
          </TouchableOpacity>
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
});

export { Project };
