import { initializeApp } from "firebase"
// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyB1WoKGsml5rElVj5dJNclFrkYt-wozZz4",
  authDomain: "pwair-app-5ba6a.firebaseapp.com",
  databaseURL: "https://pwair-app-5ba6a.firebaseio.com",
  projectId: "pwair-app-5ba6a",
  storageBucket: "pwair-app-5ba6a.appspot.com",
  messagingSenderId: "128445239510"
});

export const auth = app.auth()
