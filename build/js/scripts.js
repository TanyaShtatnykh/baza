




$(function() {
  $('.header__menu-link').on('click', function() {
    $('main').addClass('open__page');
  });
});



$('.slider__slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    swipe: true,
    adaptiveHeight: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
});
$(function() {
  $('.welcome__link-scroll').on('click', function() {
    $('main').addClass('open__page');
  });
});