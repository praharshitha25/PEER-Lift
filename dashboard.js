const user = JSON.parse(localStorage.getItem("user"));
const doubts = JSON.parse(localStorage.getItem("doubts")) || [];
const users = JSON.parse(localStorage.getItem("users")) || [];

if (!user) {
  window.location.href = "index.html";
}

// Welcome text
document.getElementById("welcome").innerText = `Welcome, ${user.name}`;

// ✅ Doubts posted by THIS user (roll based)
const doubtsPosted = doubts.filter(d => d.askedBy === user.roll).length;

// ✅ Doubts solved by THIS user (roll based)
const doubtsSolved = doubts.filter(d => d.solvedBy === user.roll).length;

// ✅ Points of THIS user
const currentUser = users.find(u => u.roll === user.roll);
const points = currentUser ? currentUser.points || 0 : 0;

document.getElementById("postedCount").innerText = doubtsPosted;
document.getElementById("solvedCount").innerText = doubtsSolved;
document.getElementById("points").innerText = points;

// Logout
function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
