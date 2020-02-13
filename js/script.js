$(document).ready(function(){
    $('.carousel').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/leftsolid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/rightsolid.png"></img></button',
      responsive: [ 
        {
          breakpoint: 575,
          settings: {
            prevArrow: false,
            nextArrow: false,
            infinite: true,
            dots: true,
            autoplay: true
          }
        }
      ]
    });
    $('[data-modal="modal"]').on('click', function(){
      $('.overlay').fadeIn();
    });
    $('.modal__close').on('click', function(){
      $('.overlay').fadeOut();
    });

    $(window).scroll(function(){
      if ($ (this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a[href=#up]").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });


    function menuChange(item){
      $(item).on('click', function(e){
        e.preventDefault();
        $('.hamburger').toggleClass('hamburger_active');
        $('.header__menu').toggleClass('header__menu_active');
      });
    }

    menuChange('.hamburger');
  
    new WOW().init();
  });
