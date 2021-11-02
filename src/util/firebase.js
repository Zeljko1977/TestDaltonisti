// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC1Og0_RCHz0ghhbDUfaKwiUnOYiRCa0s",
  authDomain: "boje-5c59d.firebaseapp.com",
  projectId: "boje-5c59d",
  storageBucket: "boje-5c59d.appspot.com",
  messagingSenderId: "850953600438",
  appId: "1:850953600438:web:d4796c6b18964a07cd5517",
  measurementId: "G-HK2RVVB0G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app