// profile.js

const profileDiv = document.getElementById("profile");

const user = JSON.parse(localStorage.getItem("user"));
const users = JSON.parse(localStorage.getItem("users")) || [];
const doubts = JSON.parse(localStorage.getItem("doubts")) || [];

// safety check
if (!user) {
  window.location.href = "index.html";
}

// get latest user data from users list
const currentUser = users.find(u => u.roll === user.roll);

// calculate stats
const doubtsAsked = doubts.filter(d => d.askedBy === user.roll).length;
const doubtsSolved = doubts.filter(d => d.solvedBy === user.roll).length;
const points = currentUser.points || 0;

profileDiv.innerHTML = `
  <div class="profile-box">
    <p><b>Name:</b> ${currentUser.name}</p>
    <p><b>Roll Number:</b> ${currentUser.roll}</p>
    <p><b>Department:</b> ${currentUser.department}</p>
    <p><b>Year:</b> ${currentUser.year}</p>

    <hr>

    <p><b>Doubts Asked:</b> ${doubtsAsked}</p>
    <p><b>Doubts Solved:</b> ${doubtsSolved}</p>
    <p><b>Total Points:</b> ${points}</p>
    <p><b>Rank:</b> Based on leaderboard</p>
  </div>
`;
