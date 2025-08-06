
// auth.js

const ADMIN_CREDENTIALS = {
  "admin@example.com": "admin123",
  "superadmin@example.com": "supersecure"
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  if (ADMIN_CREDENTIALS[email] && ADMIN_CREDENTIALS[email] === password) {
    sessionStorage.setItem("loggedInUser", email);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("login-message").textContent = "Invalid credentials.";
  }
});
