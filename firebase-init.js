import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBA7aIUj919ub7QtkQkAp-xv4XC0tzmSCI",
  authDomain: "gamesync-union.firebaseapp.com",
  projectId: "gamesync-union",
  storageBucket: "gamesync-union.appspot.com",
  messagingSenderId: "488911705365",
  appId: "1:488911705365:web:ad8b3be7936a46bb77c51c"
};

const app = initializeApp(firebaseConfig);

// 🔁 Make auth and db available globally
window.auth = getAuth(app);
window.db = getFirestore(app);

// ✅ Export app for use in modules
export { app };
