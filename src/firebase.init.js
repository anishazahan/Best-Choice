// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA22oj2nuFk0V6Nx0Ml1q8dkIBte8IiPBw",
  authDomain: "best-choice-a3d8e.firebaseapp.com",
  projectId: "best-choice-a3d8e",
  storageBucket: "best-choice-a3d8e.appspot.com",
  messagingSenderId: "303147734767",
  appId: "1:303147734767:web:71182a6dbdce655e976d1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;