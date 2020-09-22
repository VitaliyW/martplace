$(function(){
  $('.products-slider__slider-inner').slick({
    arrows: true,
    dots: false,
    variableWidth: true,
    prevArrow: '<button type="button" class="lnr-chevron-left"></button>',
    nextArrow: '<button type="button" class="lnr-chevron-right"></button>'
  });

  $('.followers__slider-inner').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    variableWidth: true,
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

  var mixer = mixitup('.products__inner');

});

$('.products__filter-btn').on('click', function(){
  $('.products__dropdown').slideToggle();
});