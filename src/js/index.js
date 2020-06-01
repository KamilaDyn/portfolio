import '.././sass/style.scss';

$(function () {
  $('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active')
  });
});


$('.mobile-menu').click(function () {
  $('.list-items').toggleClass('is-active')
  $('.fa-bars').toggleClass('hide');
  $('.fa-times').toggleClass('show');
})

$('.link').click(function () {
  $('.list-items').removeClass('is-active');
  $('.fa-times').removeClass('show');
  $('.fa-bars').removeClass('hide');
})

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
            $target.attr('tabindex', '-1');
            $target.focus();
          };
        });
      }
    }
  });