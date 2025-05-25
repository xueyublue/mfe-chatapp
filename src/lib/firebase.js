// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatdemoapp-3d2ae.firebaseapp.com",
  projectId: "reactchatdemoapp-3d2ae",
  storageBucket: "reactchatdemoapp-3d2ae.firebasestorage.app",
  messagingSenderId: "982507285756",
  appId: "1:982507285756:web:e488134c91504702bc3b79",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
