// Import the functions you need from the SDKs you need
import { initializeApp, getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3qE2etFXZEXVzCEGchD1VQ0NkwfZ6ue8",
  authDomain: "prepwise-bfcf0.firebaseapp.com",
  projectId: "prepwise-bfcf0",
  storageBucket: "prepwise-bfcf0.firebasestorage.app",
  messagingSenderId: "709380050128",
  appId: "1:709380050128:web:9079d4cf93060fe295e2d5",
  measurementId: "G-FVMVBT5BNT"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth=getAuth(app);
export const db=getFirestore(app);