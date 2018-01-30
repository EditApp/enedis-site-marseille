(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    const windowIsScrolled = window.scrollY;
    if(windowIsScrolled > 0) {
      $('#header').addClass('sticky');
    }else {
      $('#header').removeClass('sticky');
    }
    setTimeout(function(){ 
      $('.home-main').addClass('animated');

    }, 3000);

    // FastShell
    $(window).scroll(function(){
      $('#header').addClass('sticky');
    });
    // scroll
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
      
      //$(this).addClass('active');
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 80
          }, 1000);
        }
      }
    });

    $('.travaux-desc-block--item.first').each(function(){
      $(this).on('click', function(){
        $(this).parent().addClass('open');
      })
    });
    $('.travaux-desc-block--item.second').each(function(){
      $(this).on('click', function(){
        $(this).parent().removeClass('open');
      })
    });
    


  });

})(jQuery, window, document);
