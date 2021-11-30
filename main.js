
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarku").style.top = "0";
  } else {
    document.getElementById("navbarku").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 780);
});