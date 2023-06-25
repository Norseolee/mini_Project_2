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
