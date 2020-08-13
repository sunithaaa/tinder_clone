import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAjo5ZlQPBTAqjc9ZKBCAjo7G7Pv4BjpCY",
    authDomain: "tinder-clone-f7b58.firebaseapp.com",
    databaseURL: "https://tinder-clone-f7b58.firebaseio.com",
    projectId: "tinder-clone-f7b58",
    storageBucket: "tinder-clone-f7b58.appspot.com",
    messagingSenderId: "728657291839",
    appId: "1:728657291839:web:a2ef5379cdbe6332c8268a",
    measurementId: "G-0GE0BBZPY3"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const database=firebaseApp.firestore();

  export default database;