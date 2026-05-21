const loginForm = document.getElementById('loginForm');
const loginPage = document.getElementById('loginPage');
const dashboard = document.getElementById('dashboard');
const errorMsg = document.getElementById('errorMsg');
const userName = document.getElementById('userName');

// Hardcoded credentials
const validEmail = "admin@costtracker.com";
const validPassword = "12345";

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === validEmail && password === validPassword) {
    loginPage.style.display = "none";
    dashboard.style.display = "block";
    userName.textContent = "Admin"; // Display name
  } else {
    errorMsg.textContent = "Invalid email or password!";
  }
});
