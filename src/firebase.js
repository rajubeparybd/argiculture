// // src/firebase.js
// import firebase from 'firebase/app';
// import 'firebase/database'; // or 'firebase/firestore' if you're using Firestore

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   databaseURL: "https://agro-ai-1-default-rtdb.firebaseio.com/", // For Realtime Database
//   projectId: "agro-ai-1",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "1088044108124",
//   appId: "YOUR_APP_ID",
// };

// firebase.initializeApp(firebaseConfig);

// export default firebase;
// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Minimal Firebase configuration
const firebaseConfig = {
  databaseURL: 'https://your-database-name.firebaseio.com', // Only the database URL
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
