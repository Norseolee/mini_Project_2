const shrink_btn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");

let activeIndex;

shrink_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  setTimeout(moveActiveTab, 400);

  shrink_btn.classList.add("hovered");

  setTimeout(() => {
    shrink_btn.classList.remove("hovered");
  }, 500);
});

search.addEventListener("click", () => {
  document.body.classList.remove("shrink");
  search.lastElementChild.focus();
});

function moveActiveTab() {
  let topPosition = activeIndex * 58 + 2.5;

  if (activeIndex > 3) {
    topPosition += shortcuts.clientHeight;
  }

  active_tab.style.top = `${topPosition}px`;
}

function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");

  activeIndex = this.dataset.active;

  moveActiveTab();
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

function showTooltip() {
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;

  Array.from(spans).forEach((sp) => sp.classList.remove("show"));
  spans[tooltipIndex].classList.add("show");

  tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}

tooltip_elements.forEach((elem) => {
  elem.addEventListener("mouseover", showTooltip);
});
// Get the menu links and sections
const menuLinks = document.querySelectorAll(".menu-link");
const sections = document.querySelectorAll(".section");

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
    section.style.display = "block";
  });
});

// Hide sections that are not active
function hideInactiveSections() {
  sections.forEach((sec) => {
    if (!sec.classList.contains("active")) {
      sec.style.display = "none";
    } else {
      sec.style.display = "block";
    }
  });
}

// Call the function to hide inactive sections initially
hideInactiveSections();
