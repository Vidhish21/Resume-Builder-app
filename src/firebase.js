// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM1Ig-tJRv-2NNWmag-9BOcuDNBOqU1E8",
  authDomain: "resume--builder-app.firebaseapp.com",
  projectId: "resume--builder-app",
  storageBucket: "resume--builder-app.appspot.com",
  messagingSenderId: "938913243205",
  appId: "1:938913243205:web:f07112063420d51eecc32c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);