import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyBg4l01pp2hT4fsIwP6r-_mz2k8eFi9g9Y",
    authDomain: "my-firebase-app-b0413.firebaseapp.com",
    projectId: "my-firebase-app-b0413",
    storageBucket: "my-firebase-app-b0413.appspot.com",
    messagingSenderId: "362214131991",
    appId: "1:362214131991:web:cabb7fb1ff724812bd4f52",
    databaseURL:"https://my-firebase-app-b0413-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);