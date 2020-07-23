import firebase from "firebase/app";
import "firebase/auth";

export const register = async (email, password) => {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return result;
  } catch (error) {
    return { error };
  }
};

export const login = async (email, password) => {
  try {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return result;
  } catch (error) {
    return { error };
  }
};

export const logout = async () => {
  try {
    const result = await firebase.auth().signOut();
    return result;
  } catch (error) {
    return { error };
  }
};
