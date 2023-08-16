




$(function() {
  $('.header__menu-link').on('click', function() {
    $('main').addClass('open__page');
  });
});
$(function () {
  $('.form__button').on('click', function() {
    $('.modal').addClass('modal--open');
    setTimeout(function () {
      $('.modal').removeClass('modal--open');
    }, 3000);
  });
});
$(function() {
  $.scrollify({
    section : '.scroll',
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 800,
    offset : 0,
    scrollbars: true,
    standardScrollElements: ".form, .menu, .card, .contacts, .footer ",
    setHeights: false,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
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