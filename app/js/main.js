$(function() {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  

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