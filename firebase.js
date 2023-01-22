// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCSh-dYQl6fUgCUiTW_jVFON58FjeJn4Ng",
  authDomain: "react-boilermakex.firebaseapp.com",
  projectId: "react-boilermakex",
  storageBucket: "react-boilermakex.appspot.com",
  messagingSenderId: "1047725809272",
  appId: "1:1047725809272:web:88af7a329f360be067d78d",
  measurementId: "G-KSXZEDNGRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export {auth, db};