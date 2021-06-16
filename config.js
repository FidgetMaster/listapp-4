import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDNQpmLuogKKTl0XoimZpA7CF21SYjCmao",
    authDomain: "listapp-be9fd.firebaseapp.com",
    projectId: "listapp-be9fd",
    storageBucket: "listapp-be9fd.appspot.com",
    messagingSenderId: "193168125797",
    appId: "1:193168125797:web:501fe839742e76f539bb8c"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();