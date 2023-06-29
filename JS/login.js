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

  var formToReset = document.getElementById("sign-in-form");
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-pass").value;

  var user = localStorage.getItem(email);
  var data = JSON.parse(user);
  console.log(data);

  if (user == null) {
    console.log("wrong email or password");
  } else if (email == data.email && password == data.password) {
    console.log("Success!");
    window.location.replace("../index.html");
  } else {
    console.log("wrong email or password");
  }
}
