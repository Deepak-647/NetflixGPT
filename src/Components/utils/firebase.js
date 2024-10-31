// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD37ygoTQSR7WMT6C0DVMZASOS0duMBVuA",
  authDomain: "netflixgpt-e65eb.firebaseapp.com",
  projectId: "netflixgpt-e65eb",
  storageBucket: "netflixgpt-e65eb.appspot.com",
  messagingSenderId: "67280122926",
  appId: "1:67280122926:web:c4cdc34f189b1c15d1dbbf",
  measurementId: "G-MB9FRC2HNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();