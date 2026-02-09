function postDoubt() {
  let doubts = JSON.parse(localStorage.getItem("doubts")) || [];
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let currentUser = JSON.parse(localStorage.getItem("user"));

  const subject = document.getElementById("subject").value.trim();
  const question = document.getElementById("question").value.trim();
  const comfort = document.getElementById("comfort").checked;
  const pace = document.getElementById("pace").value;
  const anonymous = document.getElementById("anon").checked;

  if (!subject || !question) {
    alert("Please enter subject and doubt");
    return;
  }

  const newDoubt = {
    id: Date.now(),                 // unique ID
    subject,
    question,
    comfortMode: comfort,
    pace,
    anonymous,
    askedBy: currentUser.roll,      // ✅ roll number
    solvedBy: null,
    resolved: false,
    createdAt: new Date().toISOString()
  };

  doubts.push(newDoubt);
  localStorage.setItem("doubts", JSON.stringify(doubts));

  // increment doubtsPosted for current user
  users = users.map(u => {
    if (u.roll === currentUser.roll) {
      u.doubtsPosted = (u.doubtsPosted || 0) + 1;
      localStorage.setItem("user", JSON.stringify(u));
    }
    return u;
  });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Doubt posted successfully!");
  window.location.href = "dashboard.html";
}
