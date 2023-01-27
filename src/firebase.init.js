// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_API_KEY ,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID 

  apiKey: "AIzaSyCmYRnzqhQdaYe72SGzteS9YTpWh-HvtL4",
  authDomain: "best-choice1-a6c56.firebaseapp.com",
  projectId: "best-choice1-a6c56",
  storageBucket: "best-choice1-a6c56.appspot.com",
  messagingSenderId: "604683027012",
  appId: "1:604683027012:web:a5f5241d349519c8103211"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;