import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// 🔧 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBA7aIUj919ub7QtkQkAp-xv4XC0tzmSCI",
  authDomain: "gamesync-union.firebaseapp.com",
  projectId: "gamesync-union",
  storageBucket: "gamesync-union.appspot.com",
  messagingSenderId: "488911705365",
  appId: "1:488911705365:web:ad8b3be7936a46bb77c51c"
};

// 🚀 Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 🔐 Set up Firebase Auth with persistence
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("Persistence set"))
  .catch((error) => console.error("Persistence error:", error));

// 🔥 Get Firestore instance
const db = getFirestore(app);

// ➕ Define db2 (same instance, usable separately)
const db2 = db;

// 🌐 Make available globally
window.auth = auth;
window.db = db;
window.db2 = db2;

// 📦 Export everything
export { app, auth, db, db2 };
