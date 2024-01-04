import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp (
    {
        apiKey: "AIzaSyCsMSNSEIZfeScjjg68ooQBfNU1fLwBvp4",
        authDomain: "chat-8dcb2.firebaseapp.com",
        projectId: "chat-8dcb2",
        storageBucket: "chat-8dcb2.appspot.com",
        messagingSenderId: "589372810311",
        appId: "1:589372810311:web:adb9605378d23add353d62"
      }
).auth();