const texts = {
  en: {
    title: "Smart Aadhaar Center Monitoring System",
    loginTitle: "Authorized Login",
    loginBtn: "Secure Login",
    info: "For authorized officials only<br>Centralized access from anywhere",
    dashTitle: "Smart Aadhaar Center Dashboard",
    dashSub: "Centralized Monitoring System",
    status: "System Status: Online 🟢",
    centers: "Centers Connected: Nationwide",
    devices: "Biometric Devices: Active",
    iot: "IoT Nodes: ESP-Based Units",
    logout: "Logout"
  },
  hi: {
    title: "स्मार्ट आधार केंद्र निगरानी प्रणाली",
    loginTitle: "अधिकृत लॉगिन",
    loginBtn: "सुरक्षित लॉगिन",
    info: "केवल अधिकृत अधिकारियों के लिए<br>कहीं से भी एक्सेस",
    dashTitle: "स्मार्ट आधार डैशबोर्ड",
    dashSub: "केंद्रीकृत निगरानी प्रणाली",
    status: "सिस्टम स्थिति: ऑनलाइन 🟢",
    centers: "केंद्र जुड़े हुए: राष्ट्रव्यापी",
    devices: "बायोमेट्रिक डिवाइस: सक्रिय",
    iot: "IoT नोड्स: ESP आधारित",
    logout: "लॉगआउट"
  },
  bn: {
    title: "স্মার্ট আধার কেন্দ্র মনিটরিং সিস্টেম",
    loginTitle: "অনুমোদিত লগইন",
    loginBtn: "নিরাপদ লগইন",
    info: "শুধুমাত্র অনুমোদিত কর্মকর্তাদের জন্য",
    dashTitle: "স্মার্ট আধার ড্যাশবোর্ড",
    dashSub: "কেন্দ্রীভূত পর্যবেক্ষণ ব্যবস্থা",
    status: "সিস্টেম অবস্থা: অনলাইন 🟢",
    centers: "সংযুক্ত কেন্দ্র: দেশব্যাপী",
    devices: "বায়োমেট্রিক ডিভাইস: সক্রিয়",
    iot: "IoT নোড: ESP ভিত্তিক",
    logout: "লগআউট"
  },
  mr: {
    title: "स्मार्ट आधार केंद्र निरीक्षण प्रणाली",
    loginTitle: "अधिकृत लॉगिन",
    loginBtn: "सुरक्षित लॉगिन",
    info: "फक्त अधिकृत अधिकाऱ्यांसाठी",
    dashTitle: "स्मार्ट आधार डॅशबोर्ड",
    dashSub: "केंद्रीकृत निरीक्षण प्रणाली",
    status: "सिस्टम स्थिती: ऑनलाइन 🟢",
    centers: "केंद्र जोडलेली: देशभर",
    devices: "बायोमेट्रिक उपकरणे: सक्रिय",
    iot: "IoT नोड्स: ESP आधारित",
    logout: "लॉगआउट"
  }
};

function changeLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage(lang);
}

function loadLanguage() {
  const lang = localStorage.getItem("lang") || "en";
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const t = texts[lang] || texts.en;

  if (document.getElementById("title")) {
    document.getElementById("title").innerHTML = t.title;
    document.getElementById("loginTitle").innerHTML = t.loginTitle;
    document.getElementById("loginBtn").innerHTML = t.loginBtn;
    document.getElementById("info").innerHTML = t.info;
  }

  if (document.getElementById("dashTitle")) {
    document.getElementById("dashTitle").innerHTML = t.dashTitle;
    document.getElementById("dashSub").innerHTML = t.dashSub;
    document.getElementById("status").innerHTML = t.status;
    document.getElementById("centers").innerHTML = t.centers;
    document.getElementById("devices").innerHTML = t.devices;
    document.getElementById("iot").innerHTML = t.iot;
    document.getElementById("logoutBtn").innerHTML = t.logout;
  }
}

/* Login logic */
function login() {
  if (
    document.getElementById("username").value === "admin" &&
    document.getElementById("password").value === "1234"
  ) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid Credentials";
  }
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

let mode = "";

function openPhone(type) {
  mode = type;
  document.getElementById("phoneModal").style.display = "block";
}

function openService() {
  document.getElementById("phoneModal").style.display = "none";
  document.getElementById("serviceModal").style.display = "block";

  if (mode === "update") loadUpdateOptions();
  else loadFreshForm();
}

/* UPDATE AADHAAR FLOW */
function loadUpdateOptions() {
  document.getElementById("serviceContent").innerHTML = `
    <h3>Update Aadhaar Details</h3>
    <button onclick="updateName()">1. Update Name</button><br><br>
    <button onclick="updateGender()">2. Update Gender</button><br><br>
    <button onclick="updateAddress()">3. Update Address</button><br><br>
    <button onclick="updateMobile()">4. Update Mobile</button><br><br>
    <button onclick="updateEmail()">5. Update Email</button><br><br>
    <button onclick="updateBio()">6. Update Biometrics</button><br><br>
    <button onclick="updateAll()">7. Update All</button>
  `;
}

/* INDIVIDUAL WINDOWS */
function updateName() {
  showForm("Update Name", `
    Current Name <input>
    Updated Name <input>
  `);
}

function updateGender() {
  showForm("Update Gender", `
    Current Gender <select>
      <option>Male</option><option>Female</option>
      <option>Transgender</option><option>Other</option>
    </select>
    Updated Gender <select>
      <option>Male</option><option>Female</option>
      <option>Transgender</option><option>Other</option>
    </select>
  `);
}

function updateAddress() {
  showForm("Update Address", `
    Current Address <input>
    Updated Address <input>
  `);
}

function updateMobile() {
  showForm("Update Mobile", `
    Current Mobile (or N) <input>
    Updated Mobile <input>
  `);
}

function updateEmail() {
  showForm("Update Email", `
    Current Email (or N) <input>
    Updated Email <input>
  `);
}

function updateBio() {
  showForm("Update Biometrics", `
    <input type="checkbox"> Fingerprint<br>
    <input type="checkbox"> Iris<br>
    <input type="checkbox"> Photograph
  `);
}

function updateAll() {
  updateAddress();
}

/* FRESH AADHAAR FORM */
function loadFreshForm() {
  document.getElementById("serviceContent").innerHTML = `
    <h3>Fresh Aadhaar Application</h3>
    Name <input>
    Gender <select>
      <option>Male</option><option>Female</option>
      <option>Transgender</option><option>Other</option>
    </select>
    Address <input>
    Mobile <input>
    Email <input>
    <br><br>
    <button onclick="uploadDocs()">Next</button>
  `;
}

/* DOCUMENT UPLOAD */
function uploadDocs() {
  showForm("Upload Required Documents (Single PDF)", `
    <input type="file" accept="application/pdf">
  `);
}

function showForm(title, fields) {
  document.getElementById("serviceContent").innerHTML = `
    <h3>${title}</h3>
    ${fields}
    <br><br>
    <button onclick="uploadDocs()">Continue</button>
  `;
}
