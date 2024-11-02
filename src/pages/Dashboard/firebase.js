// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration (replace with your own)
const firebaseConfig = {
    apiKey: "AIzaSyCCn5ffP3xGPDTEMUbsMuHgNaacNQlhAt8",
    authDomain: "tuhin-a98b8.firebaseapp.com",
    databaseURL: "https://tuhin-a98b8-default-rtdb.firebaseio.com",
    projectId: "tuhin-a98b8",
    storageBucket: "tuhin-a98b8.appspot.com",
    messagingSenderId: "248726760217",
    appId: "1:248726760217:web:b74178aa30f27e6c083388",
    measurementId: "G-5G3YLCYRVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
