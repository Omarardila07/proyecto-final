// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { FacebookAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbEk6nBiqB7nEcG_sstRFTLbqshzxOaGY",
  authDomain: "proyectofinal-eb225.firebaseapp.com",
  projectId: "proyectofinal-eb225",
  storageBucket: "proyectofinal-eb225.appspot.com",
  messagingSenderId: "502600455562",
  appId: "1:502600455562:web:850149a7f2aa3855b76473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new FacebookAuthProvider();

export {provider}