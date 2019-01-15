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


	$('.basket_delivery-item--header div:not(:first-child)').on('click', function(){
		$(this).parent().toggleClass('open')
				.next().toggle(400)
	})

	//показываем order-form
	// $('.basket_btns a.a-btn').on('click', function(e){
	// 	e.preventDefault();

	// 	$('main.basket').addClass('checkout');
	// 	$('form.form_order').show(400);
	// 	$('.basket_total').addClass('hide-btn');
	// 	$('.basket_orderFinish').show(400);
	// })

	$('input[name=color]').on('change', function(){
		var val = $(this).val();
		$('.evoShop_shelfItem div.item_color').html(val);
	})

	$('input[name=size]').on('change', function(){
		var val = $(this).val();
		$('.evoShop_shelfItem div.item_size').html(val);
	})


	$(document).on('submit','.ajaxForm form', function(ev){
		var frm = $('.ajaxForm form');
		$('button.btn-small').prop("disabled", true);
		var src = $(this).attr('action');
		
		$.ajax({
			type: 'post',
			url: src, 
			data: frm.serialize(),
			success: function (data) {
				$('.ajaxForm').empty();
				$('.ajaxForm').html(data); 
			}
		});
		ev.preventDefault();
	});


	//формы входа-регистрации-восстановления пароля

	$(document).on('click', '.modalForm-btn a.btn-u', function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		$.fancybox.close();
		$.fancybox.open($(href));
	})

})
