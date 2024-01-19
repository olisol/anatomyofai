(function($) {
  "use strict"; // Start of use strict


  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.ai-scroll-to-top').fadeIn();
    } else {
      $('.ai-scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.ai-scroll-to-top', function(event) {
    var $anchorToTop = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchorToTop.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.ai-scroll-to', function(event) {
    var $anchorTo = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchorTo.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

})(jQuery); // End of use strict