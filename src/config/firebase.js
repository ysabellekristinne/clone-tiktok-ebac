import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyANQ2SO-vOogKKeAVyhSBwjvMYTKMpWcZA",
  authDomain: "tiktok---jornada-c6005.firebaseapp.com",
  projectId: "tiktok---jornada-c6005",
  storageBucket: "tiktok---jornada-c6005.appspot.com",
  messagingSenderId: "144168807683",
  appId: "1:144168807683:web:51d7b9341b6105685acd36",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
