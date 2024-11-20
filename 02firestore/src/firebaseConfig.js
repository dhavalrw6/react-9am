
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC814s_9YPkWhRReIxYT8luOf2D0Ve_TSE",
    authDomain: "firestore-df887.firebaseapp.com",
    projectId: "firestore-df887",
    storageBucket: "firestore-df887.firebasestorage.app",
    messagingSenderId: "619969021160",
    appId: "1:619969021160:web:16f048d6a321f28e9cb55d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app);