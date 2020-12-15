import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8yNBTJ9szRoT0IQAZxFOew_FSnoUznWk",
    authDomain: "gamer-crush.firebaseapp.com",
    databaseURL: "https://gamer-crush.firebaseio.com",
    projectId: "gamer-crush",
    storageBucket: "gamer-crush.appspot.com",
    messagingSenderId: "897684586422",
    appId: "1:897684586422:web:6f8ee4af1d2ccacab84b17",
    measurementId: "G-1PG9X2JF19"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;