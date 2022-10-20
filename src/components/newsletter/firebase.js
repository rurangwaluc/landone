import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyCE1YYbu5uzLI71WViQ6GpU1JZI2LlrWz0",
  authDomain: "eshop-2dfd3.firebaseapp.com",
  projectId: "eshop-2dfd3",
  storageBucket: "eshop-2dfd3.appspot.com",
  messagingSenderId: "355748220808",
  appId: "1:355748220808:web:fa06aede87c3727d4bb43d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;



