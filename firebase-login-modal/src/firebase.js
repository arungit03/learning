import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwfwR9MMJ-Rlo8AmQ8Uf0W6sdS4SSd7MY",
  authDomain: "a3builder.firebaseapp.com",
  projectId: "a3builder",
  storageBucket: "a3builder.firebasestorage.app",
  messagingSenderId: "236950130081",
  appId: "1:236950130081:web:9e80578b2f6e305f40cfe0",
  measurementId: "G-6MX0CXV2J4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
