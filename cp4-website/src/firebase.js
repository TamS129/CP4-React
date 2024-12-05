// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {

  apiKey: "AIzaSyDvuDlwLu3CK8mb2JuA20Dr7_NxdWzjCaI",

  authDomain: "cp4-database.firebaseapp.com",

  projectId: "cp4-database",

  storageBucket: "cp4-database.firebasestorage.app",

  messagingSenderId: "28581450639",

  appId: "1:28581450639:web:0691f721d4a6bfc9e471fa",

  measurementId: "G-1ZEG150D55"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };