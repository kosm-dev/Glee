$(function() {
  $('.shop-product__addbtn').on('click', function () {
    $('.shop-product__boxcart').toggleClass('shop-product__boxlink--active');
    $(this).removeClass('shop-product__boxlink--active');
  });

  // range slider
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.01,
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
  

  // slick slider
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.product-slide__thumbs').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,

  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumbs',
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.related-product__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4
  });
 

  // rateyo
  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "8px",
  });

  $(".product-star").rateYo({
    starWidth: "15px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "8px",
  });

  // styler
  $('.product-filter__num').styler({
  });

  
  

  // mixit up
  var containerEl1 = document.querySelector('[data-ref="products-1"]');
  var containerEl2 = document.querySelector('[data-ref="category-1"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
  
  





})