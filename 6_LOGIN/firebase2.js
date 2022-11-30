// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU714YHP7iWiDGFfSYgP-N2xD9J4ba2zw",
  authDomain: "peneso-b7f3d.firebaseapp.com",
  projectId: "peneso-b7f3d",
  storageBucket: "peneso-b7f3d.appspot.com",
  messagingSenderId: "267871697785",
  appId: "1:267871697785:web:b17653ccdf99cbec260da8",
  measurementId: "G-Z12MSVVHBS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);