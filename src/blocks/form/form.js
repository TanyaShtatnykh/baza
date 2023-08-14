$(function () {
  $('.form__button').on('click', function() {
    $('.modal').addClass('modal--open');
    setTimeout(function () {
      $('.modal').removeClass('modal--open');
    }, 3000);
  });
});