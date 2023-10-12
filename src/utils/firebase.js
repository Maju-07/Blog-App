// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-398907.firebaseapp.com",
  projectId: "blog-398907",
  storageBucket: "blog-398907.appspot.com",
  messagingSenderId: "998877494097",
  appId: "1:998877494097:web:43911b5b61f6585c1fb170",
  measurementId: "G-5EEJW900NT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
