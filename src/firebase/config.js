import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCl3YWI04zI9QzI-S94gpBH19swr2FJ3bA",
    authDomain: "dalile-moondan-site.firebaseapp.com",
    projectId: "dalile-moondan-site",
    storageBucket: "dalile-moondan-site.firebasestorage.app",
    messagingSenderId: "361415636826",
    appId: "1:361415636826:web:c180f7645399f0bfb52563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db } 