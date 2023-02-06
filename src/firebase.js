// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLekSiDagwYAXIeRNY_EttWHBB5SB5uMg",
  authDomain: "self-practice-e2d5f.firebaseapp.com",
  projectId: "self-practice-e2d5f",
  storageBucket: "self-practice-e2d5f.appspot.com",
  messagingSenderId: "913837954242",
  appId: "1:913837954242:web:1b5c1d68937b723089975b",
  measurementId: "G-SWFDRHC0CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export let storage = getStorage(app)