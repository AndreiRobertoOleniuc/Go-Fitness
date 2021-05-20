import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyApqSLy-9vzM5KI8kF6qcoHd7OjVbuPFHs",
    authDomain: "gofit-f423b.firebaseapp.com",
    projectId: "gofit-f423b",
    storageBucket: "gofit-f423b.appspot.com",
    messagingSenderId: "179650405725",
    appId: "1:179650405725:web:98a6517f0f1714256574b4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider,db};