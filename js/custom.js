/*jslint browser: true */
/*globals $:false */
/*global window */
/*===================================
            SERVICES
===================================*/

$(function () {
  //animate on
  new WOW().init();
});

/*===================================
            WORK
===================================*/

$(function () {
  $("#work").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

/*===================================
            NAVIGATION
===================================*/
//show/hide transparent black navigation

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50 ) {
      $("nav").removeClass("pot-top-nav");
    } else {
      $("nav").addClass("pot-top-nav");
    }
  });
});

//close mobile menu on click

$(function(){
    $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggle").click();
    });
});
