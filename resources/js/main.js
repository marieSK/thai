$(document).ready(function(){
  $('.galerie').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2
      }
    }
  ]
  });
  $(window).scroll(function() {
  var scrollPos = $(this).scrollTop();
  if (scrollPos > 0) {
    $('nav').css('background', 'rgba(97, 154, 71, 1)');
  } else {
    $('nav').css('background', 'rgba(97, 154, 71, 0.5)');
  }
});

});
