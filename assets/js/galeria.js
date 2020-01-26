// JavaScript Document
jQuery(document).ready(function() {

	applyCarrousel("container_galeria", 3);


});

function applyCarrousel(container, numItens=3 ) {
	jQuery("#"+container).owlCarousel({
		autoPlay : false,
	  	lazyLoad : true,

	  //responsive
	  	items: numItens,
	  	itemsDesktop : [1124,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [750,3], // betweem 900px and 601px
		itemsTablet: [585,3], //2 items between 600 and 0
		itemsMobile : [585,1], // itemsMobile disabled - inherit from itemsTablet option


	  // Navigation
	    navigation : true,
	    navigationText : ["<img src='/assets/imagens/prev-img.large.png'>","<img src=/assets/imagens/next-img.large.png'>"],
	    rewindNav : true,
	    scrollPerPage : false,
	  	singleItem:false,
	  	responsive: true,
	    responsiveRefreshRate : 200,
	    responsiveBaseWidth: window,
	});
}

//VER

function openModal() {
  document.getElementById("ModalGaleria").style.display = "block";
}

function closeModal() {
  document.getElementById("ModalGaleria").style.display = "none";
}

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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
