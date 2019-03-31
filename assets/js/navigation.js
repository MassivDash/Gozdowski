var init_header_position = $('.site-nav').offset().top + 500
var init_header_position_mob = $('.site-nav').offset().top 

$(window).on("scroll touchmove", function() {
  var header = $('.site-nav');
  var toggleButton = $('.site-nav-right');
  scroll = $(window).scrollTop()
  if (scroll >= init_header_position || (screen.width <= 650 && init_header_position_mob)){
      header.removeClass('transparent');
      header.addClass('black');
      toggleButton.removeClass('transparent');
      toggleButton.addClass('black');
  } else if(scroll < 300 || (screen.width <= 650 && scroll <= 150)) {
    header.removeClass('black');
      header.addClass('transparent'); 
      toggleButton.removeClass('black');
      toggleButton.addClass('transparent'); 
  }
  else {
      header.removeClass('black');
      header.addClass('transparent');
      toggleButton.removeClass('black');
      toggleButton.addClass('transparent');  
  }

});



$('#menu-toggle').click(function(){
  $(this).toggleClass('open');
  $('.site-nav-right').toggleClass('site-nav-open')
})