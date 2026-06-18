import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getDatabase, ref, push, update } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';
export const cfg={
apiKey:"AIzaSyCjYNCs05mUADzwgA82V9aCzf0t4PGF9bA",
authDomain:"vehicle-in-out.firebaseapp.com",
databaseURL:"https://vehicle-in-out-default-rtdb.europe-west1.firebasedatabase.app",
projectId:"vehicle-in-out",
storageBucket:"vehicle-in-out.firebasestorage.app",
messagingSenderId:"977202787180",
appId:"1:977202787180:web:e90a8ee90cc4c5f4c53949"
};
export const app=initializeApp(cfg);
export const db=getDatabase(app);
export {ref,push,update};