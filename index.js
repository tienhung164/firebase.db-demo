
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAxeiah_arF27CcFiQ-XkZiZ0l8qqumGQ",
  authDomain: "webgame-c5fa3.firebaseapp.com",
  databaseURL: "https://webgame-c5fa3.firebaseio.com",
  projectId: "webgame-c5fa3",
  storageBucket: "webgame-c5fa3.appspot.com",
  messagingSenderId: "876203903901",
  appId: "1:876203903901:web:439b877efce49297d77d74",
  measurementId: "G-3894Y0SHEX"
};


const app = initializeApp(firebaseConfig);
const db =getFirestore(app)

import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    name: "tien hung",
    sdt: "0912354103",
    born: 2001
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}