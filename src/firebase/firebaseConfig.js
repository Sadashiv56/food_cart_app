// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDNBb1aTdLCrk_Kc7RkZGvxzH--I7xsjZM",
  authDomain: "pizzaordering-90fb5.firebaseapp.com",
  projectId: "pizzaordering-90fb5",
  storageBucket: "pizzaordering-90fb5.appspot.com",
  messagingSenderId: "143219032657",
  appId: "1:143219032657:web:20e38f53a28c8864c96e70",
  measurementId: "G-3QVXVHTSKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth()

export let db = getFirestore()