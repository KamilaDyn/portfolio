$(function () {
  $(".link").click(function () {
    $(".link").removeClass("active");
    $(this).addClass("active");
  });
});

$(".mobile-menu").click(function () {
  $(".list-items").toggleClass("is-active");
  $(".fa-bars").toggleClass("hide");
  $(".fa-times").toggleClass("show");
});

//scroll

$("#scrollTo").on("click", function (event) {
  var getElement = $(this).attr("href");
  event.preventDefault();
  if (getElement.length) {
    var targetDistance = 20;
    $("html,body").animate({
        scrollTop: $(getElement).offset().top - targetDistance
      },
      500
    );
  }
});