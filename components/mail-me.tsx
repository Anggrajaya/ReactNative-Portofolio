import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const MailMe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    if (email && message) {
      const subject = "Message from Mail Me App";
      const body = `Email: ${email}\n\nMessage: ${message}`;

      const url = `mailto:anggraenawijaya1234@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      Linking.openURL(url)
        .then(() => {
          setEmail("");
          setMessage("");
        })
        .catch((err) => console.error("Failed to open email client", err));
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{ fontFamily: "Poppins-Regular", fontSize: 20, marginTop: 10 }}
      >
        Get in Touch
      </Text>
      <Text style={styles.title}>Mail Me</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter your message"
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity style={styles.button1} onPress={sendEmail}>
        <Text style={styles.buttonText1}>Send Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 30,
    marginTop: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
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

export { MailMe };
