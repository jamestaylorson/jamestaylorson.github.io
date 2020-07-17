window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(document).ready(function(){
  $(".btn1").click(function(){
    $(".fadeDiv").fadeOut(500);
  });
});

$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        $(this).focusout().blur();
    }
});

$(function() {
$(".form__field").focusin(function() {
    $(".spinButton").hide();
}).focusout(function () {
    $(".spinButton").show(100);
});
});
