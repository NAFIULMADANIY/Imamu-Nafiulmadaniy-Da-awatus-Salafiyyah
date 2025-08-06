// auth.js
document.getElementById('adminLoginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const role = document.getElementById('role').value;

  // Dummy credentials – replace with real backend later
  const superadminEmail = "fidaakaabiywaummiyaarasulallah@gmail.com";
  const superadminPassword = "superadmin123";
  const adminEmail = "admin@example.com";
  const adminPassword = "admin123";

  if (role === "superadmin" && email === superadminEmail && password === superadminPassword) {
    window.location.href = "superadmin_dashboard.html";
  } else if (role === "admin" && email === adminEmail && password === adminPassword) {
    window.location.href = "admin_dashboard.html";
  } else {
    document.getElementById("loginStatus").textContent = "Invalid login credentials.";
  }
});
