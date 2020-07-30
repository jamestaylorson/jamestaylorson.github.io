// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

//////// jQuery plugins ////////

$(document).ready(function () {

// Fade out cover screen on tap/click
  $(".cover").click(function () {
      $(".cover").fadeOut(500);
    });

// Show coffee button after 20s
  $("#hideCoffee").hide();
  $("#hideCoffee").delay(20000).fadeIn(500);

// Show back spin-button after initial spin clicked
$(".backButton").hide();
  $(".spinButton").click(function () {
    $(".backButton").fadeIn(500);
  });

// Hide and show spin button when input field is in and out of focus
  $(function () {
    $(".form__field").focusout(function () {
      $(".hideMe").show(100);
    });
  });

});


//   $(".fadedelay").delay(5000).fadeOut(500);

// Accept enter/rtn key on input field
$(document).on("keypress", "input", function (e) {
  if (e.which == 13) {
    $(this).focusout().blur();
  }
});

// Hide and show spin button when input field is in and out of focus
$(function () {
  $(".form__field").focusin(function () {
    $(".hideMe").hide();
  }).focusout(function () {
    $(".hideMe").show(100);
  });
});