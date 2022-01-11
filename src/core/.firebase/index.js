import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDCAXoAPzKFyEgml4lNKRuz-MkKhN3Qdf8",
  authDomain: "tic-tac-toe-ada47.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-ada47-default-rtdb.firebaseio.com",
  projectId: "tic-tac-toe-ada47",
  storageBucket: "tic-tac-toe-ada47.appspot.com",
  messagingSenderId: "450774857214",
  appId: "1:450774857214:web:bd99803543178d76527caf",
  measurementId: "G-GJT0277Y0V",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const firestore = firebase.firestore();

export { database, firestore };
