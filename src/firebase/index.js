import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAuRxPj6hftjqRtaKSVrCSsv-bNs5-ufto",
  authDomain: "goodiebox-firebase.firebaseapp.com",
  databaseURL: "https://goodiebox-firebase.firebaseio.com",
  projectId: "goodiebox-firebase",
  storageBucket: "goodiebox-firebase.appspot.com",
  messagingSenderId: "605839360371",
  appId: "1:605839360371:web:8da1a94eb044a860168506"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);