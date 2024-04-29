import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6h_I-vZeVLsQfLm-xnWK81CgWrR8XzAU",
  authDomain: "itw2-4f5b6.firebaseapp.com",
  projectId: "itw2-4f5b6",
  storageBucket: "itw2-4f5b6.appspot.com",
  messagingSenderId: "391177283413",
  appId: "1:391177283413:web:b64f0080665fd6026271dc",
  measurementId: "G-Z7BRY4T4RX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);