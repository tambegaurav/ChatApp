import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase/app";
import "firebase/auth";

import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
// import Loading from "../components/Loading";

export default function Routes() {
  const [user, setUser] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser();
      }
    });
  });

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
