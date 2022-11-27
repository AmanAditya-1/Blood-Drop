// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOVjH6Jhd1hJTdpjAfe-gMqnXs1drqkV0",
  authDomain: "fir-auth-1132-814e6.firebaseapp.com",
  projectId: "fir-auth-1132-814e6",
  storageBucket: "fir-auth-1132-814e6.appspot.com",
  messagingSenderId: "839133235234",
  appId: "1:839133235234:web:a1e14221801b4fcc99627b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
