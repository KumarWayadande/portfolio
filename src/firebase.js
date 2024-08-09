// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "portfolio-auth-b3819.firebaseapp.com",
  projectId: "portfolio-auth-b3819",
  storageBucket: "portfolio-auth-b3819.appspot.com",
  messagingSenderId: "599326754271",
  appId: "1:599326754271:web:30ca39d6ada10cae61f06a",
  measurementId: "G-330D2GKQ8N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);