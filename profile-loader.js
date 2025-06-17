import { auth, db } from './firebase-init.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      const profileBox = document.querySelector(".profile-box");
      if (profileBox) {
        profileBox.innerHTML = `
          <h3>${data.username}</h3>
          <p>🎮 Games Played: ${data.Games_Played || "N/A"}</p>
          <p>🏆 Trophies: ${data.Trophy_Stats || "N/A"}</p>
          <div class="fav-images">
            ${(data.Favorite_Games || []).map(game => `
              <img src="${game.image}" alt="${game.title}" />
            `).join("")}
          </div>
        `;
      }
    }
  }
});
