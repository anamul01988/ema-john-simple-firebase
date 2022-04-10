// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBCtyg45k5l1y7aYloXdOGWNztPmv0uCuE",
  authDomain: "ema-john-simple-firebase-e48ad.firebaseapp.com",
  projectId: "ema-john-simple-firebase-e48ad",
  storageBucket: "ema-john-simple-firebase-e48ad.appspot.com",
  messagingSenderId: "3836848250",
  appId: "1:3836848250:web:45dd752985995cb59fb3c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;