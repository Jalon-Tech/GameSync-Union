window.addEventListener("DOMContentLoaded", () => { 
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
    
      if (userSnap.exists()) {
        const data = userSnap.data();

        const profileBox = document.getElementById("profile-box");
        if (profileBox) {
          profileBox.innerHTML = `
            <h3>${data.username || "Unknown"}</h3>
            <p>🎮 Games Played: ${data.Games_Played || data.gamesPlayed || "N/A"}</p>
            <p>🏆 Trophies: ${data.Trophy_Stats || data.trophyCount || "N/A"}</p>
            <div class="fav-images">
              ${(data.Favorite_Games || data.favoriteImages || []).map(game => {
                const imgSrc = game.image || game; // fallback if it's a plain string
                const altText = game.title || "Favorite Game";
                return `<img src="${imgSrc}" alt="${altText}" />`;
              }).join("")}
            </div>
          `;
        }
      } else {
        console.warn("No user data found in Firestore.");
      }
    } else {
      console.log("No user is logged in.");
    }
  });
});
