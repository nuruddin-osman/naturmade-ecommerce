// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX8FK1aPs-UDOpx3_h1a5tHSQZ5SgtHSo",
  authDomain: "naturemade-e31f4.firebaseapp.com",
  projectId: "naturemade-e31f4",
  storageBucket: "naturemade-e31f4.firebasestorage.app",
  messagingSenderId: "693269878871",
  appId: "1:693269878871:web:88d87100189cf025dceb12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
