// main.js
// You can add your JavaScript here

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuBrotwyEgnCz73_E7zE2qoIcMoqUFr8g",
  authDomain: "the-truth-telling-space.firebaseapp.com",
  projectId: "the-truth-telling-space",
  storageBucket: "the-truth-telling-space.firebasestorage.app",
  messagingSenderId: "597271695679",
  appId: "1:597271695679:web:a613e18d704595494b838a",
  measurementId: "G-TFW3R4XDPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log('Welcome to The Truth Telling Space!');
