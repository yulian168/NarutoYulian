
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvH-52uN5TP3SqzxAvrxz3WaM2x80x-OQ",
  authDomain: "favoritos-7f58f.firebaseapp.com",
  projectId: "favoritos-7f58f",
  storageBucket: "favoritos-7f58f.appspot.com",
  messagingSenderId: "210056547627",
  appId: "1:210056547627:web:13f585808ba6200985496e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);