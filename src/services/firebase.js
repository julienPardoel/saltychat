import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDdTBlsswPUW_dul7u3oPXSOViQTRKVsxQ",
    authDomain: "saltychat-93987.firebaseapp.com",
    projectId: "saltychat-93987",
    storageBucket: "saltychat-93987.appspot.com",
    messagingSenderId: "393855339722",
    appId: "1:393855339722:web:6487c5a58d0b0d30faf833"
};

firebase.initializeApp(config);
export default firebase;
export const auth = firebase.auth;
export const db = firebase.firestore();


