$(function(){
  $('.products-slider__slider-inner').slick({
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="lnr-chevron-left"></button>',
    nextArrow: '<button type="button" class="lnr-chevron-right"></button>'
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "14px",
    readOnly: true,
    spacing: "3px",
    normalFill: "#fff",
    ratedFill: "#ffc000"
  });

});