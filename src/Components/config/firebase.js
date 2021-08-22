import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyB0FkTfHYA0wjWljXnzrC9ixLGXaN5l38w",
    authDomain: "foodapp-f6548.firebaseapp.com",
    projectId: "foodapp-f6548",
    storageBucket: "foodapp-f6548.appspot.com",
    messagingSenderId: "272484243369",
    appId: "1:272484243369:web:1b0fc698862978181f96b8",
    measurementId: "G-GKYFV0340W"
  };

  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();

  export const storage = firebase.storage();
  export const auth = firebase.auth();