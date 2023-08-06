


$('.slider__main-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__carousel',
    swipe: true,
    adaptiveHeight: true
});
$('.slider__carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider__main-slide',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    dots: false,
    swipe: true,
    arrows: true,
    variableWidth: true,
    prevArrow: '<img src="../img/prevArrow.svg" class="prev" alt="Назад">',
    nextArrow: '<img src="../img/prevArrow.svg" class="next" alt="Назад">'
});
