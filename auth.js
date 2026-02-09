/* =========================
   SIGN UP FUNCTION
   ========================= */
function signup() {
  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const department = document.getElementById("department").value;
  const year = document.getElementById("year").value;
  const password = document.getElementById("password").value;

  if (!name || !roll || !password) {
    alert("Please fill all required fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // ❌ prevent duplicate roll numbers
  const existingUser = users.find(u => u.roll === roll);
  if (existingUser) {
    alert("User with this roll number already exists. Please login.");
    return;
  }

  const newUser = {
    name,
    roll,
    department,
    year,
    password,
    points: 0,
    doubtsPosted: 0,
    doubtsSolved: 0
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful! Please login.");
  localStorage.setItem("user", JSON.stringify(newUser));
  window.location.href = "index.html"; // login page
}

/* =========================
   LOGIN FUNCTION
   ========================= */
function login() {
  const roll = document.getElementById("roll").value.trim();
  const password = document.getElementById("password").value;

  if (!roll || !password) {
    alert("Please enter roll number and password");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.roll === roll && u.password === password
  );

  if (!user) {
    alert("Invalid roll number or password");
    return;
  }

  // set current logged-in user
  localStorage.setItem("user", JSON.stringify(user));

  alert("Login successful");
  window.location.href = "dashboard.html";
}

/* =========================
   LOGOUT FUNCTION (optional)
   ========================= */
function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
