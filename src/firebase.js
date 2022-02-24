import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2k5yT2KKJAodZKVXKq5NIyUVRfp7GLW8",
  authDomain: "ecommerce-9fa9a.firebaseapp.com",
  projectId: "ecommerce-9fa9a",
  storageBucket: "ecommerce-9fa9a.appspot.com",
  messagingSenderId: "198150018852",
  appId: "1:198150018852:web:fd7607a58fcbf76cc805b1"
};


// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;