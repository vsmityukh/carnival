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
	
	$('.filter_header').on('click', function(){
		$(this).toggleClass('active')
				.next().toggle()
	})

	$('.prod_info-header').on('click', function(){
		$(this).toggleClass('active')
				.next().toggle()
	})

	$('.prod_tabInfo .nav-tabs a').on('click', function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		$('.nav-item .nav-link.active').removeClass('active');
		$(this).addClass('active')

		$('.tab-content .tab-pane.active').removeClass('active');
		$(href).addClass('active');
	})


	$('.basket_delivery-item--header').on('click', function(){
		$(this).toggleClass('open')
				.next().toggle(400)
	})
})
