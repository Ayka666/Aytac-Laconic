  $(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 35) {
      $('.dropdown').addClass('mini-version');
      $('.leftimg').addClass('mini-leftimg');
      $('#input').addClass('mini-input');
      $('.dropbtn').addClass('mini-version');
      $('.topnav').addClass('mini-topnav')
      $('#nav').addClass('mini-nav')
      $('.typing').addClass('mini-typing')
      $('#about').addClass('mini-about')
      $('#Buy').addClass('mini-about')
      $('.searchicon').addClass('mini-searchicon')
    } else if (scrollTop < 35) {
      $('.dropdown').removeClass('mini-version');
      $('.leftimg').removeClass('mini-leftimg');
      $('.dropbtn').removeClass('mini-version');
      $('.topnav').removeClass('mini-topnav');
      $('#nav').removeClass('mini-nav')
      $('.typing').removeClass('mini-typing')
      $('#input').removeClass('mini-input')
      $('#about').removeClass('mini-about')
      $('#Buy').removeClass('mini-about')
      $('.searchicon').removeClass('mini-searchicon')
    } 

    
  }); 
  
});
  function hide() {
  var x = document.getElementById('right-left');
var y = document.getElementById('input');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.display = 'none'

  } else {
    x.style.display = 'none';
    y.style.display = 'block'
  }
}
function closesearch () {
   var x = document.getElementById('right-left');
var y = document.getElementById('input');
  if (y.style.display === 'none') {
    y.style.display = 'block';
    x.style.display = 'none'

  } else {
    y.style.display = 'none';
    x.style.display = 'block'
  }
}
  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// carusel
$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel();
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
    
  // Enable Carousel Controls
  $(".carousel-control-prev").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#myCarousel").carousel("next");
  });
});


function more() {document.getElementById("loading-1").style.display = "block";
  document.getElementById("loading-2").style.display = "block";
  document.getElementById("loading-3").style.display = "block";
  document.getElementById("loading-4").style.display = "block";
  document.getElementById("loading-5").style.display = "block";
  document.getElementById("loading-6").style.display = "block";
}
function all() {
  document.getElementById("loading-8").style.display = "block";
  document.getElementById("loading-11").style.display = "block";
  document.getElementById("loading-1").style.display = "block";
  document.getElementById("loading-2").style.display = "block";
  document.getElementById("loading-3").style.display = "block";
  document.getElementById("loading-4").style.display = "block";
  document.getElementById("loading-5").style.display = "block";
  document.getElementById("loading-6").style.display = "block";
  document.getElementById("loading-7").style.display = "block";
  document.getElementById("loading-12").style.display = "block";
  document.getElementById("loading-9").style.display = "block";
  document.getElementById("loading-10").style.display = "block";
}
function branding() {
  document.getElementById("loading-8").style.display = "block";
  document.getElementById("loading-11").style.display = "block";
  document.getElementById("loading-1").style.display = "none";
  document.getElementById("loading-2").style.display = "none";
  document.getElementById("loading-3").style.display = "none";
  document.getElementById("loading-4").style.display = "none";
  document.getElementById("loading-5").style.display = "none";
  document.getElementById("loading-6").style.display = "none";
  document.getElementById("loading-7").style.display = "none";
  document.getElementById("loading-12").style.display = "none";
  document.getElementById("loading-9").style.display = "none";
  document.getElementById("loading-10").style.display = "none";
}
function app() {
  document.getElementById("loading-10").style.display = "block";
  document.getElementById("loading-11").style.display = "none";
  document.getElementById("loading-1").style.display = "none";
  document.getElementById("loading-2").style.display = "none";
  document.getElementById("loading-3").style.display = "none";
  document.getElementById("loading-4").style.display = "none";
  document.getElementById("loading-5").style.display = "none";
  document.getElementById("loading-6").style.display = "none";
  document.getElementById("loading-7").style.display = "none";
  document.getElementById("loading-12").style.display = "none";
  document.getElementById("loading-9").style.display = "none";
  document.getElementById("loading-8").style.display = "none";
}
function interior() {
  document.getElementById("loading-9").style.display = "block";
  document.getElementById("loading-12").style.display = "block";
  document.getElementById("loading-1").style.display = "none";
  document.getElementById("loading-2").style.display = "none";
  document.getElementById("loading-3").style.display = "none";
  document.getElementById("loading-4").style.display = "none";
  document.getElementById("loading-5").style.display = "none";
  document.getElementById("loading-6").style.display = "none";
  document.getElementById("loading-7").style.display = "none";
  document.getElementById("loading-11").style.display = "none";
  document.getElementById("loading-8").style.display = "none";
  document.getElementById("loading-10").style.display = "none";
}
function web() {
  document.getElementById("loading-7").style.display = "block";
  document.getElementById("loading-11").style.display = "none";
  document.getElementById("loading-1").style.display = "none";
  document.getElementById("loading-2").style.display = "none";
  document.getElementById("loading-3").style.display = "none";
  document.getElementById("loading-4").style.display = "none";
  document.getElementById("loading-5").style.display = "none";
  document.getElementById("loading-6").style.display = "none";
  document.getElementById("loading-8").style.display = "none";
  document.getElementById("loading-12").style.display = "none";
  document.getElementById("loading-9").style.display = "none";
  document.getElementById("loading-10").style.display = "none";
}
$(document).ready(function(){
  $(".primary-icon").click(function(){
    $(".mini-new-navbar").toggle();
  });
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-image");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
 }