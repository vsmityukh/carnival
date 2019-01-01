$(function() {

	$('.top_slider-wrap').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '<i class="fas fa-arrow-left"></i>',
		nextArrow: '<i class="fas fa-arrow-right"></i>',
	});

	$('.new_prod-slider').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '<i class="fas fa-arrow-left"></i>',
		nextArrow: '<i class="fas fa-arrow-right"></i>',
	});
  

});

//распологаем стрелочки на слайдере
function stendArrows(sliderClass){
	var ulW = $(sliderClass).find('.slick-dots').width();
	var halfW = ulW / 2 + 41;

	var containerW = $('.container').width();

	var countMargin = containerW / 2 - halfW;

	$(sliderClass).find('.fa-arrow-left')
		.css('left', countMargin);
	$(sliderClass).find('.fa-arrow-right')
		.css('right',countMargin);
}


$(document).ready(function(){
	stendArrows('.new_prod-slider'); 
})
