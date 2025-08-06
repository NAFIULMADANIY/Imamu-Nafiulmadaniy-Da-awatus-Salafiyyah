window.addEventListener("DOMContentLoaded", () => {
  fetch("prayer-times.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("prayer-times-placeholder").innerHTML = data;
    });
});
