// Sets the viewport to 100% minus the address bar
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
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