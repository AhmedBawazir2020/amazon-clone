import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCdyZRZdHJjRmglZ5sIe4Hfrynz6AmsLwY",
    authDomain: "challenge-7a423.firebaseapp.com",
    databaseURL: "https://challenge-7a423.firebaseio.com",
    projectId: "challenge-7a423",
    storageBucket: "challenge-7a423.appspot.com",
    messagingSenderId: "751801397542",
    appId: "1:751801397542:web:2e04d0582708061a3291e7",
    measurementId: "G-8F861NMVG8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};

