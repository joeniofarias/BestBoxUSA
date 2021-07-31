import firebase from 'firebase/app';
import 'firebase/firestore';

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyDVIo8kKHwReaHnBAXnAHOmNbVObUQZYSI",
    authDomain: "bestboxusa-sso.firebaseapp.com",
    projectId: "bestboxusa-sso",
    storageBucket: "bestboxusa-sso.appspot.com",
    messagingSenderId: "427014584525",
    appId: "1:427014584525:web:c5a8d86e73627aeb88d184",
    measurementId: "G-23BH0K7YS2"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();

export {
    db,
    auth
};