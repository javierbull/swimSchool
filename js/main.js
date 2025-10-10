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

    items: 2, //10 items above 1000px browser width
    loop: true, // Para un bucle infinito
    margin: 16, // Margen entre elementos
    autoplay: true, // Para que se mueva automáticamente
    nav: true, // Habilita los controles de navegación (flechas)
    itemsDesktop: [1000, 2], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // 3 items betweem 900px and 601px
    itemsTablet: [600, 2], //2 items between 600 and 0;
    itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option

  });

  // Custom Navigation Events
  $(".next").click(function () {
    owl.trigger('owl.next');
  })
  $(".prev").click(function () {
    owl.trigger('owl.prev');
  })


});