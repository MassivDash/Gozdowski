$(".slider").slick({

    // normal options...
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,    
    // the magic
    responsive: [{
  
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true,
          speed: 500,
          
        }
  
      }, {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          speed: 500,
          
        }
  
      }, {
  
        breakpoint: 300,
        settings: {
            slidesToShow: 1,
            infinite: true,
            speed: 500, 
          }
      }]
  });

$('.slider-button-0').on('click', function() {
  $('.slider').slick('slickGoTo', 0, false);
  });

 $('.slider-button-1').on('click', function() {
    $('.slider').slick('slickGoTo', 1, false);
    });
  
$('.slider-button-2').on('click', function() {
      $('.slider').slick('slickGoTo', 2, false);
      });
  
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  
  var currentButton = [".slider-button-", currentSlide].join('')
  var nextButton = ['.slider-button-', nextSlide].join('')
  $('.slider-info-holder').removeClass('fadeIn');
  $('.slider-info-holder').addClass('fadeOut');
  $('.slider-info-title').removeClass('fadeInSlow');
  $('.slider-info-title').addClass('fadeOut');
  $('.slider-info-excerpt').removeClass('fadeInSupaSlow');
  $('.slider-info-excerpt').addClass('fadeOut');
  $('.slider-info-readmore').removeClass('fadeInSupaSlow');
  $('.slider-info-readmore').addClass('fadeOut');
  $(currentButton).removeClass('active');
        $(nextButton).addClass('active');
  console.log(nextSlide, currentSlide);
      });

      $('.slider').on('afterChange', function(){
        $('.slider-info-holder').removeClass('fadeOut');
        $('.slider-info-holder').addClass('fadeIn');
        $('.slider-info-title').delay( 1000 ).removeClass('fadeOut');
        $('.slider-info-title').delay( 1000 ).addClass('fadeInSlow');
        $('.slider-info-excerpt').delay( 2000 ).removeClass('fadeOut');
        $('.slider-info-excerpt').delay( 2000 ).addClass('fadeInSupaSlow');
        $('.slider-info-readmore').delay( 3000 ).removeClass('fadeOut')
        $('.slider-info-readmore').delay( 3000 ).addClass('fadeInSupaSlow');
            });

$( document ).ready(function() {
  $('.slider-button-0').addClass('active');
  $('.slider-info-holder').removeClass('fadeOut');
  $('.slider-info-holder').addClass('fadeIn');
  $('.slider-info-title').removeClass('fadeOut');
  $('.slider-info-title').delay( 800 ).addClass('fadeInSlow');
  $('.slider-info-excerpt').removeClass('fadeOut');
  $('.slider-info-excerpt').delay( 1000 ).addClass('fadeInSupaSlow');
  $('.slider-info-readmore').delay( 2000 ).removeClass('fadeOut')
  $('.slider-info-readmore').delay( 2000 ).addClass('fadeInSupaSlow');
});

$('.slider').on('swipe', function(event, slick, direction){
  $('.slider-info-holder').removeClass('fadeIn');
  $('.slider-info-holder').addClass('fadeOut');
  $('.slider-info-title').removeClass('fadeInSlow');
  $('.slider-info-title').addClass('fadeOut');
  $('.slider-info-excerpt').removeClass('fadeInSupaSlow');
  $('.slider-info-excerpt').addClass('fadeOut');
  $('.slider-info-readmore').removeClass('fadeInSupaSlow');
  $('.slider-info-readmore').addClass('fadeOut');
});


