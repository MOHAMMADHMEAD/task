(function ($) {
  "use strict";

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');

      $('#header').css("margin-left", 0);
      $('#header').css("margin-right", 0);
      $('#nav').removeClass('pt-25');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#nav').addClass('pt-25');
      $('#header').css("margin-left", 60);
      $('#header').css("margin-right", 60);
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }



})(jQuery);

