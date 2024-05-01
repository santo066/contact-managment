// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQEdphXepJbV_ms52zTwNQCrRLF8bzJGY",
  authDomain: "contact-managment-project.firebaseapp.com",
  projectId: "contact-managment-project",
  storageBucket: "contact-managment-project.appspot.com",
  messagingSenderId: "588888527915",
  appId: "1:588888527915:web:a3b9adfb75e059cac4c66e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;