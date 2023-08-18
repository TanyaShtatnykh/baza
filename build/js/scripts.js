




$(function () {
  $('.form__button').on('click', function() {
    $('.modal').addClass('modal--open');
    setTimeout(function () {
      $('.modal').removeClass('modal--open');
    }, 3000);
  });
});
$(function() {
  $('.header__menu-link').on('click', function() {
    $('main').addClass('open__page');
  });
});


$(function () {
  $('.menu__name').on('click', function() {
    if (!$(this).hasClass('menu__name--open')) {
      $('.menu__name').removeClass('menu__name--open');
      $('.menu__slider').removeClass('menu__slider--open');
      $('.menu__photo').removeClass('menu__photo--open');
    }
    $(this).toggleClass('menu__name--open');
    $(this).next('.menu__photo').toggleClass('menu__photo--open');
    $(this).next('.menu__slider').toggleClass('menu__slider--open');

    if ($(this).hasClass('menu__name--bar')) {
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
$(document).ready(function () {
  $('.verification').addClass('verification--open');
  $('body').css({'overflow-y' : 'hidden', 'height' : '100vh'});
  
  $('.verification__btn').on('click', function() {
    if ($(this).hasClass('verification__btn--yes')) {
      $('.verification').removeClass('verification--open');
      $('body').css({'overflow-y' : '', 'height' : ''});
    } else {
      $(location).attr('href', "https://www.google.ru/")
    }
  });
})
$(function() {
  $('.welcome__link-scroll').on('click', function() {
    $('main').addClass('open__page');
  });
});