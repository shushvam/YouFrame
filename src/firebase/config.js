 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAzJefEirjczUKbI67mpccIe2KbkeEfUYM",
    authDomain: "youframe-ff910.firebaseapp.com",
    databaseURL: "https://youframe-ff910.firebaseio.com",
    projectId: "youframe-ff910",
    storageBucket: "youframe-ff910.appspot.com",
    messagingSenderId: "76788659537",
    appId: "1:76788659537:web:d06869f58572e635380f70",
    measurementId: "G-NCZG85KCLF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};