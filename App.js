import React from "react";
import Navigation from "./src/navigation";
import firebase from "firebase/app";

import { firebaseConfig } from "./src/globalStateConfigs/environmentVariables";

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return <Navigation />;
}
