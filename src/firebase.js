// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDOlEvAeKJ6HZkG9JZ6PQfECQ0smwKHw5M",
  authDomain: "netflix-project-01.firebaseapp.com",
  projectId: "netflix-project-01",
  storageBucket: "netflix-project-01.appspot.com",
  messagingSenderId: "485421796689",
  appId: "1:485421796689:web:fa22b9b5031b9b1850d770"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)