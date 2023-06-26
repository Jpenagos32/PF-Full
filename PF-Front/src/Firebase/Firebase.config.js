import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8pHC2L-aLz0bkujXtS9eKXUZj6IH0N7w",
  authDomain: "sunsethotel-8df2b.firebaseapp.com",
  projectId: "sunsethotel-8df2b",
  storageBucket: "sunsethotel-8df2b.appspot.com",
  messagingSenderId: "704163821000",
  appId: "1:704163821000:web:7d1f151be80343e3537cfd",
  measurementId: "G-9J8E1CEGZE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app);