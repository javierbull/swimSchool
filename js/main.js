// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Owl carousel

$(document).ready(function () {

  var owl = $("#owl-testimonials");

  owl.owlCarousel({

    items: 2,
    loop: true,
    margin: 16,
    autoplay: true,
    nav: true,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [900, 2],
    itemsTablet: [768, 1],
    itemsMobile : [479,1]
  });

  // Custom Navigation Events
  $(".next").click(function () {
    owl.trigger('owl.next');
  })
  $(".prev").click(function () {
    owl.trigger('owl.prev');
  })


});