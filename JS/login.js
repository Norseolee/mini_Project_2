function checkLogin() {
  if (localStorage.getItem("login") != null) {
    let u = localStorage.getItem("login");
    let d = JSON.parse(u);

    let firstNameSentenceCase =
      d.firstName.charAt(0).toUpperCase() + d.firstName.slice(1).toLowerCase();

    document.getElementById(
      "login-nav-item"
    ).innerHTML = `Welcome, <span id="loggedInUserName">${firstNameSentenceCase} </span>!`;

    document.getElementById("login-nav-item").href = "HTML/account.html";

    document.getElementById(
      "loginStatus"
    ).innerHTML = `Welcome, <span id="loggedInUserName">${firstNameSentenceCase} </span>!`;

    document.getElementById("loginStatus").href = "HTML/account.html";
    // $("#login-nav-item").text(d.firstName);
    // $("#loginStatus").text(d.firstName);
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
  event.preventDefault();

  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-pass").value;

  var user = localStorage.getItem(email);
  var data = JSON.parse(user);

  if (user == null) {
    console.log("wrong email or password");
  } else if (email == data.email && password == data.password) {
    window.location.replace("../index.html");
    console.log("Success!");
    localStorage.setItem("login", user);
  } else {
    console.log("wrong email or password");
  }
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
