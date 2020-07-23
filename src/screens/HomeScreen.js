import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import firebase from "firebase/app";
import "firebase/auth";
import FormButton from "../components/FormButton";
import { logout } from "../api/auth";

export default function HomeScreen() {
  const user = firebase.auth().currentUser;

  return (
    <View style={styles.container}>
      <Title>Home Screen</Title>
      <Title>All chat rooms will be listed here</Title>
      <Title>{user.uid}</Title>
      <FormButton
        modeValue="contained"
        title="Logout"
        onPress={() => logout()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
