// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl37VXLqNevQifO9MqcGJdwRn6GZklT74",
  authDomain: "netflix-2-f8a61.firebaseapp.com",
  projectId: "netflix-2-f8a61",
  storageBucket: "netflix-2-f8a61.firebasestorage.app",
  messagingSenderId: "398917710547",
  appId: "1:398917710547:web:148c0e0804edb6cd075a26",
  measurementId: "G-3NHCGM8G3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Remove analytics for SSR compatibility (optional)
// const analytics = getAnalytics(app);

// Export auth and firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;