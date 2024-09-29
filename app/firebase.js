// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAxG-oiujF4BwGuzQkLB1elIXVmCOhgbA",
  authDomain: "expense-tracker-7901c.firebaseapp.com",
  projectId: "expense-tracker-7901c",
  storageBucket: "expense-tracker-7901c.appspot.com",
  messagingSenderId: "343403893017",
  appId: "1:343403893017:web:172a82036cb82a19e2f588",
  measurementId: "G-QT1LKKF0SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app); // Add this line to initialize Firestore
