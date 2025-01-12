import { Text, View, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { SkillsData } from "./data-skil";

const Skills = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
      }}
    >
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 20,
          color: "#555555",
        }}
      >
        Explore My
      </Text>
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 30,
          color: "#555555",
        }}
      >
        Skills
      </Text>

      <View style={styles.exprience_frame}>
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 30,
            color: "#555555",
          }}
        >
          My Skills
        </Text>
        {SkillsData.map((data, index) => (
          <View key={index} style={styles.skills_list}>
            <Ionicons name="cog" size={30} color="#333" />
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 20,
                color: "#555555",
              }}
            >
              {data.name}
            </Text>
          </View>
        ))}
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
  skills_list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 5,
    gap: 5,
  },
});

export { Skills };
