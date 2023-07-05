$(function () {
  if (
    $(document).height() > $(window).height() &&
    !("ontouchstart" in document.documentElement)
  ) {
    var scrollTop = $("html").scrollTop()
      ? $("html").scrollTop()
      : $("body").scrollTop();
    $("html").addClass("noscroll").css("top", -scrollTop);
  }

  $(".fa-x").click(function () {
    let $toggleOption = $(this).closest(".toggle_option");
    $toggleOption.slideUp("fast", enableScroll);
  });

  $(".toggle_option").hide();
  $(".toggle_btn").click(function () {
    let $toggleOption = $(this).next(".toggle_option");
    $toggleOption.slideToggle(function () {
      if ($toggleOption.is(":visible")) {
        disableScroll();
      } else {
        enableScroll();
      }
    });
  });

  function disableScroll() {
    var scrollTop = parseInt($("html").css("top"));
    $("html").addClass("noscroll");
    $("html,body").scrollTop(-scrollTop);
  }

  function enableScroll() {
    var scrollTop = parseInt($("html").css("top"));
    $("html").removeClass("noscroll");
    $("html,body").scrollTop(-scrollTop);
  }

  enableScroll();

  // toggle for login =========================================
  let $accountToggle = $(".account_hover_toggle");
  let $toggleOption = $(".toggle_font");

  // toggle for login =========================================
  $("#loginStatus").click(function () {
    let $this = $(this);

    if (!$this.hasClass("clicked")) {
      $accountToggle.slideDown();
      $this.css("background-color", "#2b4875");
      $this.addClass("clicked");
      $toggleOption.hide("fast");
    } else {
      $accountToggle.slideUp(function () {
        $this.css("background-color", "");
        $this.removeClass("clicked");
        $toggleOption.show("fast");
      });
    }
  });

  $(document).click(function (e) {
    let target = e.target;
    let $accountToggleArea = $("#loginStatus, .account_hover_toggle");

    if (!$accountToggleArea.is(target)) {
      $accountToggle.slideUp(function () {
        $("#loginStatus").css("background-color", "");
        $("#loginStatus").removeClass("clicked");
        $toggleOption.show("fast");
      });
    }
  });
});

// loading page ==================================================
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

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
