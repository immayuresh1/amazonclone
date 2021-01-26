import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCyvr0hvp7GzwQQEXHxSJBCnj5E5weLr9k",
  authDomain: "clone-768aa.firebaseapp.com",
  projectId: "clone-768aa",
  storageBucket: "clone-768aa.appspot.com",
  messagingSenderId: "910761280271",
  appId: "1:910761280271:web:1c156bfa5e2d619a8b347a",
  measurementId: "G-C5QD53LCXW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };