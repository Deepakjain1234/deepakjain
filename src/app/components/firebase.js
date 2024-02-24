import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyBdqtbdoErspd8Jq-Kn23hEWB-dCBRohQY",
    authDomain: "portfolio-b53a2.firebaseapp.com",
    databaseURL: "https://portfolio-b53a2-default-rtdb.firebaseio.com",
    projectId: "portfolio-b53a2",
    storageBucket: "portfolio-b53a2.appspot.com",
    messagingSenderId: "211223860709",
    appId: "1:211223860709:web:c9286e5e2eee1fe764cb0c",
    measurementId: "G-P2Q31BM0Z1",
    databaseURL: "https://portfolio-b53a2-default-rtdb.firebaseio.com/"
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);