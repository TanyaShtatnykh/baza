





$(function() {
  $('.header__menu-link').on('click', function() {
    $('main').addClass('open__page');
  });
});


$(function () {
  
  $('.menu__block').on('click', function() {
    if (!$(this).hasClass('menu__block--open')) {
      $('.menu__block').removeClass('menu__block--open');
      $('.menu__name').removeClass('menu__name--open');
      $('.menu__gallery').removeClass('menu__gallery--open');
    }
    $(this).toggleClass('menu__block--open');
    $(this).children('.menu__name').toggleClass('menu__name--open');
    $(this).next('.menu__gallery').toggleClass('menu__gallery--open');

    if ($(this).hasClass('menu__block--bar')) {
      $('.menu__slider').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        swipe: true,
      });
    };
  });
});

$(function() {
  $('.welcome__link-scroll').on('click', function() {
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