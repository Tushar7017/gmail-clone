import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC-6etYd5A-eUaWSZKp-fWgXf0Z8HgKswM",
    authDomain: "clone-94ed8.firebaseapp.com",
    projectId: "clone-94ed8",
    storageBucket: "clone-94ed8.appspot.com",
    messagingSenderId: "860396229685",
    appId: "1:860396229685:web:32c3520751fe22cd618d7c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
