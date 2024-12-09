// utils/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC81ujwQcnh7z7C4-Wg9JfEOP1URVKDRrc",
    authDomain: "website-practice-a36d5.firebaseapp.com",
    databaseURL: "https://website-practice-a36d5-default-rtdb.firebaseio.com",
    projectId: "website-practice-a36d5",
    storageBucket: "website-practice-a36d5.firebasestorage.app",
    messagingSenderId: "133116114171",
    appId: "1:133116114171:web:35f415716cf48b4e0c2c5e",
    measurementId: "G-VLTRT8NGTG"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };