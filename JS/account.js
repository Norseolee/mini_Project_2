const lstcountires = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");
const shrink_btn = document.querySelector(".shrink-btn");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");
const menuLinks = document.querySelectorAll(".menu-link");
const sections = document.querySelectorAll(".section");

allSideMenu.forEach((item) => {
  const li = item.parentElement;

  item.addEventListener("click", function () {
    allSideMenu.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

shrink_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  setTimeout(moveActiveTab, 400);

  shrink_btn.classList.add("hovered");

  setTimeout(() => {
    shrink_btn.classList.remove("hovered");
  }, 500);
});

function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");

  activeIndex = this.dataset.active;
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

function showTooltip() {
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;

  tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}

tooltip_elements.forEach((elem) => {
  elem.addEventListener("mouseover", showTooltip);
});

// Activate the first section by default
sections[0].classList.add("active");

// Add click event listener to each menu link
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the section associated with the clicked link
    const sectionId = menuLink.dataset.section;
    const section = document.getElementById(sectionId);

    // Toggle the active class for menu links
    menuLinks.forEach((link) => {
      link.classList.remove("active");
    });
    menuLink.classList.add("active");

    // Toggle the active class for sections
    sections.forEach((sec) => {
      sec.classList.remove("active");
      sec.style.display = "none";
    });
    section.classList.add("active");
    section.style.display = "flex";
  });
});

// Hide sections that are not active
function hideInactiveSections() {
  sections.forEach((sec) => {
    if (!sec.classList.contains("active")) {
      sec.style.display = "none";
    } else {
      sec.style.display = "flex";
    }
  });
}

// Call the function to hide inactive sections initially
hideInactiveSections();

lstcountires.forEach(function (item) {
  let o = document.createElement("option");
  o.text = item;
  o.value = item;
  countries.appendChild(o);
});
function sentenceCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function checkLogin() {
  if (localStorage.getItem("login") != null) {
    let u = localStorage.getItem("login");
    let d = JSON.parse(u);
    let formattedFirstName = sentenceCase(d.firstName);
    let formattedLastName = sentenceCase(d.lastName);
    document.getElementById("fname").value = formattedFirstName;
    document.getElementById("lname").value = formattedLastName;
    document.getElementById("email").value = d.email;
  } else if (sessionStorage.getItem("login") != null) {
    let u = sessionStorage.getItem("login");
    let d = JSON.parse(u);
    let formattedFirstName = sentenceCase(d.firstName);
    let formattedLastName = sentenceCase(d.lastName);
    document.getElementById("fname").value = formattedFirstName;
    document.getElementById("lname").value = formattedLastName;
    document.getElementById("email").value = d.email;
  }
}

checkLogin();

function checkLoginInfo() {
  if (localStorage.getItem("login") != null) {
    let u = localStorage.getItem("login");
    let d = JSON.parse(u);

    let firstNameSentenceCase =
      d.firstName.charAt(0).toUpperCase() +
      d.firstName.slice(1).toLowerCase() +
      " " +
      d.lastName.charAt(0).toUpperCase() +
      d.lastName.slice(1).toLowerCase();

    document.getElementById(
      "account_name"
    ).innerHTML = `Welcome, <span id="account_name">${firstNameSentenceCase}</span>!`;
  } else if (sessionStorage.getItem("login") != null) {
    let u = sessionStorage.getItem("login");
    let d = JSON.parse(u);

    let firstNameSentenceCase =
      d.firstName.charAt(0).toUpperCase() +
      d.firstName.slice(1).toLowerCase() +
      " " +
      d.lastName.charAt(0).toUpperCase() +
      d.lastName.slice(1).toLowerCase();

    document.getElementById(
      "account_name"
    ).innerHTML = `Welcome, <span id="account_name">${firstNameSentenceCase}</span>!`;
  }
}
checkLoginInfo();

function displaySelectedImage(event) {
  const selectedFile = event.target.files[0];
  const selectedImage = document.getElementById("selectedImage");
  selectedImage.src = URL.createObjectURL(selectedFile);
  selectedImage.style.objectFit = "cover";
}
function checkAccount() {
  if (localStorage.getItem("login") != null) {
    let u = localStorage.getItem("login");
    let d = JSON.parse(u);
    let formattedFirstName = sentenceCase(d.firstName);
    let formattedLastName = sentenceCase(d.lastName);
    document.getElementById("acc_fname").value = formattedFirstName;
    document.getElementById("acc_lname").value = formattedLastName;
    document.getElementById("acc_email").value = d.email;
    document.getElementById("as_email").value = d.email;
  } else if (sessionStorage.getItem("login") != null) {
    let u = sessionStorage.getItem("login");
    let d = JSON.parse(u);
    let formattedFirstName = sentenceCase(d.firstName);
    let formattedLastName = sentenceCase(d.lastName);
    document.getElementById("acc_fname").value = formattedFirstName;
    document.getElementById("acc_lname").value = formattedLastName;
    document.getElementById("acc_email").value = d.email;
    document.getElementById("as_email").value = d.email;
  }
}
checkAccount();

function addAccount() {
  var firstName = document.getElementById("acc_fname").value;
  var lastName = document.getElementById("acc_lname").value;
  var email = document.getElementById("acc_email").value;
  if (localStorage.getItem("login") != null) {
    var existingUserData = localStorage.getItem("login");
    var existingUser = JSON.parse(existingUserData);

    if (existingUser) {
      if (existingUser.email === email) {
        // If the current email matches the updated email, update the existing entry
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
      } else {
        // Check if an entry with the updated email already exists
        var updatedUserData = localStorage.getItem(email);
        var updatedUser = JSON.parse(updatedUserData);

        if (updatedUser) {
          console.log("Email already taken. Please choose a different email.");
          return;
        }

        // Delete the old entry and update with the updated user data
        localStorage.removeItem(existingUser.email);
        existingUser.email = email;
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
      }
    } else {
      // If user does not exist, create a new user object
      var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      existingUser = user;
    }

    // Store the updated/created user data in local storage under the email key
    var json = JSON.stringify(existingUser);
    localStorage.setItem(email, json);

    // Update the value of the login key if necessary
    localStorage.setItem("login", json);

    console.log("User added/updated:", existingUser);

    // Retrieve existing user data from local storage using the current email
    var existingUserData = localStorage.getItem("login");
    var existingUser = JSON.parse(existingUserData);

    if (existingUser) {
      if (existingUser.email === email) {
        // If the current email matches the updated email, update the existing entry
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
      } else {
        // Check if an entry with the updated email already exists
        var updatedUserData = localStorage.getItem(email);
        var updatedUser = JSON.parse(updatedUserData);

        if (updatedUser) {
          console.log("Email already taken. Please choose a different email.");
          return;
        }

        // Delete the old entry and update with the updated user data
        localStorage.removeItem(existingUser.email);
        existingUser.email = email;
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
      }
    } else {
      // If user does not exist, create a new user object
      var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      existingUser = user;
    }

    // Store the updated/created user data in local storage under the email key
    var json = JSON.stringify(existingUser);
    localStorage.setItem(email, json);

    // Update the value of the login key if necessary
    localStorage.setItem("login", json);
    console.log("User added/updated:", existingUser);
  } else if (sessionStorage.getItem("login") != null) {
    var existingUserData = sessionStorage.getItem("login");
    var existingUser = JSON.parse(existingUserData);

    if (existingUser) {
      if (existingUser.email === email) {
        // If the current email matches the updated email, update the existing entry
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
      } else {
        // Check if an entry with the updated email already exists
        var updatedUserData = sessionStorage.getItem(email);
        var updatedUser = JSON.parse(updatedUserData);

        if (updatedUser) {
          console.log("Email already taken. Please choose a different email.");
          return;
        }

        // Delete the old entry and update with the updated user data
        localStorage.removeItem(existingUser.email);
        existingUser.email = email;
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
      }
    } else {
      // If user does not exist, create a new user object
      var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      existingUser = user;
    }

    // Store the updated/created user data in local storage under the email key
    var json = JSON.stringify(existingUser);
    localStorage.setItem(email, json);

    // Update the value of the login key if necessary
    sessionStorage.setItem("login", json);

    console.log("User added/updated:", existingUser);

    // Retrieve existing user data from local storage using the current email
    var existingUserData = sessionStorage.getItem("login");
    var existingUser = JSON.parse(existingUserData);

    if (existingUser) {
      if (existingUser.email === email) {
        // If the current email matches the updated email, update the existing entry
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
      } else {
        // Check if an entry with the updated email already exists
        var updatedUserData = localStorage.getItem(email);
        var updatedUser = JSON.parse(updatedUserData);

        if (updatedUser) {
          console.log("Email already taken. Please choose a different email.");
          return;
        }

        // Delete the old entry and update with the updated user data
        sessionStorage.removeItem(existingUser.email);
        existingUser.email = email;
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
      }
    } else {
      // If user does not exist, create a new user object
      var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      existingUser = user;
    }

    // Store the updated/created user data in local storage under the email key
    var json = JSON.stringify(existingUser);
    localStorage.setItem(email, json);

    // Update the value of the login key if necessary
    sessionStorage.setItem("login", json);
    console.log("User added/updated:", existingUser);
  }
}

// Credit Card
new Vue({
  el: "#app",
  data() {
    return {
      currentCardBackground: Math.floor(Math.random() * 25 + 1), // just for fun :D
      cardName: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
      minCardYear: new Date().getFullYear(),
      amexCardMask: "#### ###### #####",
      otherCardMask: "#### #### #### ####",
      cardNumberTemp: "",
      isCardFlipped: false,
      focusElementStyle: null,
      isInputFocused: false,
    };
  },
  mounted() {
    this.cardNumberTemp = this.otherCardMask;
    document.getElementById("cardNumber").focus();
  },
  computed: {
    getCardType() {
      let number = this.cardNumber;
      let re = new RegExp("^4");
      if (number.match(re) != null) return "visa";

      re = new RegExp("^(34|37)");
      if (number.match(re) != null) return "amex";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) return "mastercard";

      re = new RegExp("^6011");
      if (number.match(re) != null) return "discover";

      re = new RegExp("^9792");
      if (number.match(re) != null) return "troy";

      return "visa"; // default type
    },
    generateCardNumberMask() {
      return this.getCardType === "amex"
        ? this.amexCardMask
        : this.otherCardMask;
    },
    minCardMonth() {
      if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
      return 1;
    },
  },
  watch: {
    cardYear() {
      if (this.cardMonth < this.minCardMonth) {
        this.cardMonth = "";
      }
    },
  },
  methods: {
    flipCard(status) {
      this.isCardFlipped = status;
    },
    focusInput(e) {
      this.isInputFocused = true;
      let targetRef = e.target.dataset.ref;
      let target = this.$refs[targetRef];
      this.focusElementStyle = {
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
      };
    },
    blurInput() {
      let vm = this;
      setTimeout(() => {
        if (!vm.isInputFocused) {
          vm.focusElementStyle = null;
        }
      }, 300);
      vm.isInputFocused = false;
    },
  },
});

// Credit Card

document.getElementById("logout-btn").addEventListener("click", logout);

function logout() {
  if (localStorage.getItem("login") != null) {
    localStorage.removeItem("login");
    window.location.href = "../index.html";
  } else if (sessionStorage.getItem("login") != null) {
    sessionStorage.removeItem("login");
    window.location.href = "../index.html";
  }
}
function deleteAccount() {
  if (localStorage.getItem("login") != null) {
    var email = document.getElementById("acc_email").value;
    var checkbox = document.getElementById("terms");

    if (checkbox.checked) {
      // Retrieve the user data from local storage
      var userData = localStorage.getItem(email);

      if (userData) {
        // Remove the user entry from local storage
        localStorage.removeItem(email);
        // Remove the login entry if the deleted account is the current user
        if (localStorage.getItem("login") === userData) {
          localStorage.removeItem("login");
        }
        console.log("Account deleted successfully");

        // Delay before redirecting to the index page (200ms)
        setTimeout(function () {
          window.location.pathname = "../index.html";
        }, 200);
      } else {
        console.log("Account not found");
      }
    } else {
      console.log("Please check the checkbox to confirm account deletion");
    }
  } else if (sessionStorage.getItem("login") != null) {
    var email = document.getElementById("acc_email").value;
    var checkbox = document.getElementById("terms");

    if (checkbox.checked) {
      // Retrieve the user data from local storage
      var userData = localStorage.getItem(email);

      if (userData) {
        // Remove the user entry from local storage
        localStorage.removeItem(email);
        // Remove the login entry if the deleted account is the current user
        if (sessionStorage.getItem("login") === userData) {
          sessionStorage.removeItem("login");
        }
        console.log("Account deleted successfully");

        // Delay before redirecting to the index page (200ms)
        setTimeout(function () {
          window.location.pathname = "../index.html";
        }, 200);
      } else {
        console.log("Account not found");
      }
    } else {
      console.log("Please check the checkbox to confirm account deletion");
    }
  }
}
