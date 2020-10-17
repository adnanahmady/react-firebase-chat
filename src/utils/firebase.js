import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import config from "../config";

firebase.initializeApp({
  apiKey: config("firebase.apiKey"),
  authDomain: config("firebase.authDomain"),
  databaseURL: config("firebase.databaseURL"),
  projectId: config("firebase.projectId"),
  storageBucket: config("firebase.storageBucket"),
  messagingSenderId: config("firebase.messagingSenderId"),
  appId: config("firebase.appId"),
  measurementId: config("firebase.measurementId"),
});

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export { useAuthState } from "react-firebase-hooks/auth";
export { useCollectionData } from "react-firebase-hooks/firestore";
