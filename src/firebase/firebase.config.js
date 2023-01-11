// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA64zqTCHDMFV1u6X9YKVxDKJqN7QJa3mM",
  authDomain: "dragon-news-db1c9.firebaseapp.com",
  projectId: "dragon-news-db1c9",
  storageBucket: "dragon-news-db1c9.appspot.com",
  messagingSenderId: "604724521379",
  appId: "1:604724521379:web:3ef55d8dc75187f32a5216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;