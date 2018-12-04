(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();


  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
  $('.carousel.carousel-slider.today').carousel({
    fullWidth: true
  });

  slideCarouselToday();
  function slideCarouselToday() {
      k = setInterval(function(){
        $('.carousel.carousel-slider.today').carousel('next');
      },7000);

      $('.carousel.carousel-slider.today').mouseenter(function(event) {
        clearInterval(k);
      });
      $('.carousel.carousel-slider.today').mouseleave(function(event) {
        slideCarouselToday();
      });
  }
});
