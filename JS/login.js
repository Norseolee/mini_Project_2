function checkLogin() {
  if (localStorage.getItem("login") != null) {
    // let u = localStorage.getItem("login");
    // let d = JSON.parse(u);

    // let firstNameSentenceCase =
    //   d.firstName.charAt(0).toUpperCase() + d.firstName.slice(1).toLowerCase();

    // document.getElementById(
    //   "login-nav-item"
    // ).innerHTML = `Welcome, <span id="loggedInUserName">${firstNameSentenceCase} </span>!`;

    // document.getElementById("login-nav-item").href = "HTML/account.html";

    // document.getElementById(
    //   "loginStatus"
    // ).innerHTML = `Welcome, <span id="loggedInUserName">${firstNameSentenceCase} </span>!`;

    // document.getElementById("loginStatus").href = "HTML/account.html";
    $("#login-nav-item").text("Account");
    document.getElementById("login-nav-item").href = "HTML/account.html";
    $("#loginStatus").text("Account");
    document.getElementById("login-nav-item").href = "HTML/account.html";
  }
}

checkLogin();

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});

function addAccount(e) {
  e.preventDefault();

  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  var confirmPassword = document.getElementById("c_pass").value;

  // Validate password and confirm password
  if (password !== confirmPassword) {
    showErrorModal("Password and confirm password do not match");
    return;
  }

  var user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  var json = JSON.stringify(user);
  localStorage.setItem(email, json);

  document.getElementById("sign-up-form").reset();
  console.log("User added:", user);
}

var signUpForm = document.getElementById("sign-up-form");
signUpForm.addEventListener("submit", addAccount);

function validateLogin() {
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-pass").value;

  var user = localStorage.getItem(email);

  if (user == null) {
    showErrorModal("Wrong email or password");
  } else {
    var data = JSON.parse(user);

    if (email === data.email && password === data.password) {
      localStorage.setItem("login", user);
      console.log("Success!");
      window.location.replace("../index.html");
    } else {
      showErrorModal("Wrong email or password");
    }
  }
}

function showErrorModal(message) {
  var errorModal = new bootstrap.Modal(document.getElementById("errorModal"), {
    keyboard: false,
    backdrop: "static",
  });
  var errorModalMessage = document.getElementById("errorModalMessage");
  errorModalMessage.textContent = message;
  errorModal.show();
}

// Retrieve the name from localStorage
const loggedInUserName = localStorage.getItem("loggedInUser");

// Check if the name exists in localStorage
if (loggedInUserName) {
  // Update the login status in the navbar with the logged-in user's name
  document.getElementById(
    "loginStatus"
  ).innerHTML = `Welcome, <span id="loggedInUserName">${loggedInUserName}</span>!`;
}
