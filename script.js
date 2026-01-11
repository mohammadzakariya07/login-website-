<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>UIDAI Login</title>
  <link rel="stylesheet" href="style.css">
</head>
<body onload="loadLanguage()">

  <!-- Language Selector -->
  <div class="lang-bar">
    <label>Select Language:</label>
    <select onchange="changeLanguage(this.value)">
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
      <option value="bn">বাংলা</option>
      <option value="mr">मराठी</option>
      <option value="te">తెలుగు</option>
      <option value="ta">தமிழ்</option>
      <option value="ur">اردو</option>
      <option value="pa">ਪੰਜਾਬੀ</option>
    </select>
  </div>

  <!-- Header -->
  <div class="header">
    <h1 id="uidai">UIDAI</h1>
    <p id="title">Smart Aadhaar Center Monitoring System</p>
  </div>

  <!-- Login Box -->
  <div class="login-box">
    <h2 id="loginTitle">Authorized Login</h2>

    <input type="text" id="username" placeholder="Operator ID">
    <input type="password" id="password" placeholder="Password">

    <button onclick="login()" id="loginBtn">Secure Login</button>

    <p id="error"></p>

    <p class="info" id="info">
      For authorized officials only<br>
      Centralized access from anywhere
    </p>
  </div>

  <script src="script.js"></script>
</body>
</html>
