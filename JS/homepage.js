$(function () {
  $(".toggle_option").hide();
  $(".toggle_btn").click(function () {
    $(this).next(".toggle_option").slideToggle();
  });

  $(document).click(function (e) {
    var target = e.target;
    if (
      !$(target).is(".toggle_btn") &&
      !$(target).parents().is(".toggle_btn")
    ) {
      //{ $('.dropdown').hide(); }
      $(".toggle_option").slideUp();
    }
  });
});

$(document).ready(function () {
  $(".carousel").scrollLeft(0);
});

const slider = document.querySelector(".carousel");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});
