import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKj3fRaNw3v7QsoEZgL5mCrTGG72Aii3Q",
    authDomain: "gofitme-20335.firebaseapp.com",
    projectId: "gofitme-20335",
    storageBucket: "gofitme-20335.appspot.com",
    messagingSenderId: "712061508841",
    appId: "1:712061508841:web:f5c4603cd093f010a92478"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider,db};