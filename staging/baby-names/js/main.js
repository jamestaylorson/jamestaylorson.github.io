// Sets the viewport to 100% minus the address bar
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Fade out cover screen on tap/click
$(document).ready(function () {
  $(".btn1").click(function () {
    $(".fadeDiv").fadeOut(500);
  });
});

// Accept enter/rtn key on input field
$(document).on("keypress", "input", function (e) {
  if (e.which == 13) {
    $(this).focusout().blur();
  }
});

// Hide and show spin button when input field is in and out of focus
$(function () {
  $(".form__field").focusin(function () {
    $(".spinButton").hide();
  }).focusout(function () {
    $(".spinButton").show(100);
  });
});

// Hide coffee div 5s
$(document).ready(function () {
  $("#hideMe").hide();
  $("#hideMe").delay(5000).fadeIn(500);
});