// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {

    $("#myBtn").addClass("scale-in");
    $("#myBtn").removeClass("scale-out");

  } else {
    $("#myBtn").removeClass("scale-in");
    $("#myBtn").addClass("scale-out");

  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html,body').animate({
        scrollTop: 0
    }, 700);

} 
AOS.init();
$(document).ready(function(){
    $('.tooltipped').tooltip();
  });