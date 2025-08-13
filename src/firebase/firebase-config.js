// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ2cUAYeGjYDx6Kljox04VGDaVY8tOPFU",
  authDomain: "learn-firebase-46ccd.firebaseapp.com",
  projectId: "learn-firebase-46ccd",
  storageBucket: "learn-firebase-46ccd.firebasestorage.app",
  messagingSenderId: "488888690377",
  appId: "1:488888690377:web:248a0e224edef72fea4f18",
  measurementId: "G-BQZCTM4ECN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export {auth};