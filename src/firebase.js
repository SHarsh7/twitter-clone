// import firebase from  "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBsuErh5DCvevjVFlaBhHOmarURFDq5TaQ",
    authDomain: "twitter-clone-b5942.firebaseapp.com",
    projectId: "twitter-clone-b5942",
    storageBucket: "twitter-clone-b5942.appspot.com",
    messagingSenderId: "667426409514",
    appId: "1:667426409514:web:0c5f590dc4be556eb24753"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;