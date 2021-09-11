$(function() {
  // бургер меню
  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
  // Реализация табов
  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });



  // Реализация "добавить в корзину"
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
  // Related слайдер

  $('.related-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    // variableWidth: true,
    // centerMode: true,
    // centerPadding: '40px',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/decor/arrow-related-left.svg" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/decor/arrow-related-right.svg" alt="arrow"></button>',

  });

  // Сдвоенный слайдер как для карточки товара

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