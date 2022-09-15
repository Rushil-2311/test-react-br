import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

// @ts-ignore
if (!firebase?.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyA1GaxiDwuejqHNeyfHIekWw9r2-qfgZrM",
    authDomain: "canvas-e7173.firebaseapp.com",
    projectId: "canvas-e7173",
    storageBucket: "canvas-e7173.appspot.com",
    messagingSenderId: "15458909355",
    appId: "1:15458909355:web:2ab2c4d7aa8d8ee6154bee",
  });
} else {
  //@ts-ignore
  firebase.app();
}

// @ts-ignore
export var db = firebase.firestore();

export default firebase;
