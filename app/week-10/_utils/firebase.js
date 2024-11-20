// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeZMaHAyz1fp2T-vX3io4NSsAuqk-e9pQ",
  authDomain: "cprg306-assignments-2b56b.firebaseapp.com",
  projectId: "cprg306-assignments-2b56b",
  storageBucket: "cprg306-assignments-2b56b.firebasestorage.com",
  messagingSenderId: "842539658271",
  appId: "1:842539658271:web:8d6c592c01f7ae0c4a792a",
  measurementId: "G-CF3TNHR3PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);