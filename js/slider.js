$(function () {
  $(".projects__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    centerMode: true,
    centerPadding: "0",
  });
  //autoplay: true,
  //autoplaySpeed: 5000,
});
