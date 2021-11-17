jQuery(function ($) {

  'use strict';

  // // 1. preloader
  // $(window).ready(function () {
  //   $('#preloader').delay(200).fadeOut('fade');
  // });

  // 2. fixed navbar
  $(window).on('scroll', function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 0) {
      $('.navbar').addClass('affix');
      $('.scroll-to-target').addClass('open');
    } else {
      $('.navbar').removeClass('affix');
      $('.scroll-to-target').removeClass('open');
    }
    // checks if window is scrolled more than 500px, adds/removes top to target class
    if ($(this).scrollTop() > 500) {
      $('.scroll-to-target').addClass('open');
    } else {
      $('.scroll-to-target').removeClass('open');
    }
  });

  $('.sub-menu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
          $(this).parents('.sub-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".sub-menu");
      $subMenu.toggleClass('show');


      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
          $('.dropdown-submenu .show').removeClass("show");
      });
      return false;
  });

   // 8. client-testimonial one item carousel
  $('.client-testimonial-1').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    items: 1,
  });

  $('.client-testimonial').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

});