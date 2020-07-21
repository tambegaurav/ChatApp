import React from "react";
import Navigation from "./src/navigation";
import firebase from "firebase";

import { firebaseConfig } from "./src/globalStateConfigs/environmentVariables";

export default function App() {
  firebase.initializeApp(firebaseConfig);
  return <Navigation />;
}
