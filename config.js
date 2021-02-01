import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyA4mwLb3Ju0-lEM6dlX3ht9pVempOi2J90",
    authDomain: "story-hub-1d15d.firebaseapp.com",
    projectId: "story-hub-1d15d",
    storageBucket: "story-hub-1d15d.appspot.com",
    messagingSenderId: "74704884193",
    appId: "1:74704884193:web:4a097a8e13e93f962102a0"
  };

firebase.initalizeApp(firebaseConfig);

export default firebase.firestore()