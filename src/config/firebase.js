import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAV41x_fvfx9MrKRrWKlnBZBNkGOx8Q0Qg",
  authDomain: "sarcapp-9d8f9.firebaseapp.com",
  projectId: "sarcapp-9d8f9",
  storageBucket: "sarcapp-9d8f9.appspot.com",
  messagingSenderId: "56909173260",
  appId: "1:56909173260:web:5b788635bcdd91611a1429",
  measurementId: "G-NBEV8TH0YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();