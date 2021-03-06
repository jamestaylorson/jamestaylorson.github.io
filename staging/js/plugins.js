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

// Place any jQuery/helper plugins in here.

$(document).ready(function () {

// Fade out cover screen on tap/click
  $(".cover").click(function () {
      $(".cover").fadeOut(500);
      $('html, body').animate({
        scrollTop: $('.viewportfix').offset().top
    }, 1);
    });
});

// Hide and show botton nav
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.bottom = "0";
        } else {
          document.getElementById("navbar").style.bottom = "-100px";
        } 
        prevScrollpos = currentScrollPos;
      };

