import '.././sass/style.scss';
import '.././animate/animate.min.css';

$(function () {
  $('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active')
  });

  $('.mobile-menu').click(function () {
    $('.navbar').toggleClass('is-active');
    $('.fa-bars').toggleClass('hide');
    $('.fa-times').toggleClass('show');
    $('.backdrop').css('display', 'block');
    $("#body").toggleClass('body-no-scroll');
  })

  $('.link').click(function () {
    $('.navbar').removeClass('is-active');
    $('.fa-bars').toggleClass('hide');
    $('.fa-times').toggleClass('show');
    $("#body").removeClass('body-no-scroll');
    $('.backdrop').css('display', 'none');

  })

  $('.backdrop').click(function () {
    $('.navbar').removeClass('is-active');
    $('.backdrop').css('display', 'none');
    $("#body").toggleClass('body-no-scroll');
    $('.fa-bars').toggleClass('hide');
    $('.fa-times').toggleClass('show');
  })

});
  
// resize window
$(window).resize(function () {
  //do something

  var width = $(document).width();
  if (width >= 800) {
    $('.navbar').removeClass('is-active');
    $('.backdrop').css('display', 'none');
    $("#body").removeClass('body-no-scroll');
    $('.fa-bars').removeClass('hide');
    $('.fa-times').removeClass('show');

  }
});



//scroll animated


$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.focus();
          };
        });
      }
    }
  });