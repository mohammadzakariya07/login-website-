function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // CHANGE USERNAME & PASSWORD HERE
  if (username === "admin" && password === "1234") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText =
      "❌ Invalid Username or Password";
  }
}
