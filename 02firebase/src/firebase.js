// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBROzkZ1hM0Q7YZXfirAg-n1V_9syfsHc",
    authDomain: "my-03firebase.firebaseapp.com",
    projectId: "my-03firebase",
    storageBucket: "my-03firebase.firebasestorage.app",
    messagingSenderId: "363297406236",
    appId: "1:363297406236:web:c61ee67c5c542c910fced9",
    databaseURL: "https://my-03firebase-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);