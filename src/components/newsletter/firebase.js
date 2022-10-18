import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// You need to enter your own API keys here like I have shown in the video 
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

export const firebaseConfig = {
  apiKey: "AIzaSyCE1YYbu5uzLI71WViQ6GpU1JZI2LlrWz0",
  authDomain: "eshop-2dfd3.firebaseapp.com",
  projectId: "eshop-2dfd3",
  storageBucket: "eshop-2dfd3.appspot.com",
  messagingSenderId: "355748220808",
  appId: "1:355748220808:web:fa06aede87c3727d4bb43d"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default db;
