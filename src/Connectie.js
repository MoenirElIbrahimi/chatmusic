import {getDocs, collection, doc} from 'firebase/firestore'
import {db } from '../firebase-config';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLaYHedM4Vdpduq-on54zzdeH0KEFfI3s",
  authDomain: "chat-music-587f1.firebaseapp.com",
  projectId: "chat-music-587f1",
  storageBucket: "chat-music-587f1.appspot.com",
  messagingSenderId: "968708414765",
  appId: "1:968708414765:web:4c45df3f97b761942887a4",
  measurementId: "G-L2NKRMHKD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);