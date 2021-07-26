// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAGtiplYK6d02Sgn_chDT2JE0F8yDTOIpw",
    authDomain: "twitter-clone-5f334.firebaseapp.com",
    projectId: "twitter-clone-5f334",
    storageBucket: "twitter-clone-5f334.appspot.com",
    messagingSenderId: "1014310384203",
    appId: "1:1014310384203:web:0108c2a0abe00fc25f93ce",
    measurementId: "G-V1MYVD5FBT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;