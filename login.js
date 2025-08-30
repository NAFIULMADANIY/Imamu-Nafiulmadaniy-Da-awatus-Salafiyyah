 <script>
  // Admin & Superadmin whitelists
  const adminWhitelist = ["naliyuadam@gmail.com"]; 
  const superAdminWhitelist = ["fidaakaabiywaummiyaarasulallah@gmail.com"]; 

  function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Very basic demo authentication
    if (email && password) {
      sessionStorage.setItem("loggedInUser", email);

      // Redirect based on whitelist
      if (superAdminWhitelist.includes(email)) {
        window.location.href = "superadmin-dashboard.html";
      } else if (adminWhitelist.includes(email)) {
        window.location.href = "admin-dashboard.html";
      } else {
        alert("❌ Access Denied! You are not whitelisted.");
        sessionStorage.removeItem("loggedInUser");
      }
    } else {
      alert("Please enter email and password.");
    }
  }
</script>
