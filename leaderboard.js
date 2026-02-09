// leaderboard.js

const leaderboardEl = document.getElementById("leaderboard");

// get users
let users = JSON.parse(localStorage.getItem("users")) || [];

if (users.length === 0) {
  leaderboardEl.innerHTML = "<p>No leaderboard data available.</p>";
} else {
  // ✅ ensure points & doubtsSolved always exist
  users = users.map(u => ({
    ...u,
    points: u.points || 0,
    doubtsSolved: u.doubtsSolved || 0
  }));

  // ✅ sort by points (descending)
  users.sort((a, b) => b.points - a.points);

  let html = "<ol>";

  users.forEach((user, index) => {
    let badge = "";
    if (index === 0) badge = " 🥇";
    else if (index === 1) badge = " 🥈";
    else if (index === 2) badge = " 🥉";

    html += `
      <li>
        <strong>${user.name}</strong> (${user.roll})<br>
        Points: ${user.points} | Doubts Solved: ${user.doubtsSolved}
        ${badge}
      </li>
    `;
  });

  html += "</ol>";

  leaderboardEl.innerHTML = html;
}

