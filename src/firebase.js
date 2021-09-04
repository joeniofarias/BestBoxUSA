import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdcZg-7TxLS6AB6JzqzK_t_YNCNukvPPw",
    authDomain: "bestboxusa-80b32.firebaseapp.com",
    projectId: "bestboxusa-80b32",
    storageBucket: "bestboxusa-80b32.appspot.com",
    messagingSenderId: "101138737245",
    appId: "1:101138737245:web:e5776270bb1e8a3d07c5b4",
    measurementId: "G-MKPFKJQ652"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();

export {
    db,
    auth
};