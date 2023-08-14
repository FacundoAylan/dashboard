import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBGGjRViUEBb-otgeG8c2nq4C3KYeBKGBA",
  authDomain: "app-paddle.firebaseapp.com",
  databaseURL: "https://app-paddle-default-rtdb.firebaseio.com/",
  projectId: "app-paddle",
  storageBucket: "app-paddle.appspot.com",
  messagingSenderId: "342737251791",
  appId: "1:342737251791:web:79c55eb40280166fedf6ba"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const firebaseAuth = getAuth(firebase)