(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    const windowIsScrolled = window.scrollY;
    if(windowIsScrolled > 0) {
      $('#header').addClass('sticky');
    }else {
      $('#header').removeClass('sticky');
    }
    $(window).scroll(function(){
      $('#header').addClass('sticky');
        if($(this).scrollTop() >= 700) {
          $('#sousmenu').addClass('sticky');
        }else {
          if ($('#sousmenu').hasClass('sticky')) {
            $('#sousmenu').removeClass('sticky');
          }
        }
    });
    

    setTimeout(function(){ 
      $('.home-main').addClass('animated');

    }, 3000);

    // FastShell
    // $(window).scroll(function(){
    //  
    // });
    // scroll
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
      
      //$(this).addClass('active');
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 65
          }, 1000);
        }
      }
    });

    // $('.travaux-desc-block--item.first').each(function(){
    //   $(this).on('click', function(){
    //     $(this).parent().addClass('open');
    //   });
    // });
    // $('.travaux-desc-block--item.second').each(function(){
    //   $(this).on('click', function(){
    //     $(this).parent().removeClass('open');
    //   });
    // });
    //menu mobile
    var mobileMenu = $('.mobile-menu');
    $('.burger').on('click', function(){
      mobileMenu.toggleClass('open');
      
    });
    
/////////////////////////////SCROLL QUARTIERS
    var containerCols = $('#cartiers .col-3');
    var containerLenght = containerCols.length;
    var totalLenght = containerLenght * 200;
  
    var scrollContainer = document.querySelector('#cartiers .flex-direction-block');
    scrollContainer.style.width = totalLenght + 'px'; 

    function myFunction(e) {
        var x = e.clientX;
        //var coor = x ;

        var dynamicScrollRight = '-' + x * 1 + 'px';
        scrollContainer.style.marginLeft = dynamicScrollRight;
    
    }
    if(containerLenght > 1){
     
      scrollContainer.addEventListener('mousemove', function(event) {
          myFunction(event);
      });
      scrollContainer.addEventListener('touchmove', function(event) {
          myFunction(event);
      });
    }else {
      containerCols.addClass('unique');
      $('#cartiers .flex-direction-block').addClass('auto-width');
    }
 ///////////////////////////// END SCROLL QUARTIERS   
    



  });

})(jQuery, window, document);
