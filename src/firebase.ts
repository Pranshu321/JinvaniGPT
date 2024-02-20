// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq533FRFKRcdbs4Hx-xB9JD0Ff-yKedkI",
  authDomain: "jinvanigpt.firebaseapp.com",
  projectId: "jinvanigpt",
  storageBucket: "jinvanigpt.appspot.com",
  messagingSenderId: "894009853958",
  appId: "1:894009853958:web:9cbbfb34c2c67c870d5b87",
  measurementId: "G-2WJY273SXJ",
};

// Initialize Firebase
let app;

if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = app.storage();

export { db, auth, storage };
