// import firebase from 'firebase/compat/app'; 
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCq7fbces-uSJYidEbDGbs2C3z8VMP9Vl0",
  authDomain: "skillex-b9701.firebaseapp.com",
  projectId: "skillex-b9701",
  storageBucket: "skillex-b9701.appspot.com",
  messagingSenderId: "277512893590",
  appId: "1:277512893590:web:9abfecfbeb01432ce63eb7",
  measurementId: "G-HV6TW5ES5H",
  // apiKey: "AIzaSyCPBAQgF8bTMvCVWlU_IOpV-7F0TTp2drc",
  // authDomain: "printbajar-3edba.firebaseapp.com",
  // projectId: "printbajar-3edba",
  // storageBucket: "printbajar-3edba.appspot.com",
  // messagingSenderId: "719533183574",
  // appId: "1:719533183574:web:9db1c35fb15d9a9f0a61f7",
  // measurementId: "G-7W0DG5QC9P",
};

// firebase.initializeApp(firebaseConfig);
// var storage = firebase.storage();
// export default storage;
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { auth, storage, firestore };