(function ($) {

  "use strict";

    // COLOR MODE
    // $('.color-mode').click(function(){
    //     $('.color-mode-icon').toggleClass('active')
    //     $('body').toggleClass('dark-mode')
    // })
    $('.color-mode').click(function(){
      // Toggle dark mode on the body
      $('body').toggleClass('dark-mode');
      
      // Toggle the 'active' class on the color-mode element (optional styling)
      // $(this).toggleClass('active');
      
      // Check if dark mode is active and update the icon
      if ($('body').hasClass('dark-mode')) {
          // If dark mode is on, switch to the sun icon
          $('.color-mode-icon').removeClass('uil-moon').addClass('uil-sun');
      } else {
          // If dark mode is off, switch to the moon icon
          $('.color-mode-icon').removeClass('uil-sun').addClass('uil-moon');
      }
  });
  

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
