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