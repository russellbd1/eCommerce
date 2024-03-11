'use strict'

$(document).ready(function () {

  $('.bestsell_slider').owlCarousel({
    loop: true,
    slideBy: 1,
    margin: 15,     
    nav: true,
    dots: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
    
});





 
 
    $('.featured_slider').owlCarousel({
      loop: true,
      slideBy: 1,
      margin: 15,     
      nav: true,
      dots: true,
      navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 2
          },
          1000: {
              items: 4
          },
          1200: {
              items: 4
          }
      }
      
  });







  $('.women_slider').owlCarousel({
    loop: true,
    slideBy: 1,
    margin: 15,     
    nav: true,
    dots: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
    
});
   
  
  


});