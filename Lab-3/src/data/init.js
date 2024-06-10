// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQyIZ9eU4bdfPcyrXpXhR5Q0nNoHji0xM",
    authDomain: "piw-webpage.firebaseapp.com",
    projectId: "piw-webpage",
    storageBucket: "piw-webpage.appspot.com",
    messagingSenderId: "1004078204278",
    appId: "1:1004078204278:web:0dbb8ee99f623fa22c6657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
