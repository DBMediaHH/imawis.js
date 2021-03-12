
$(document).ready(function() {  

	if($('#hamburger-button').is(':hidden')) {
	
		for(var i = 0; i < $('video').length; i++) {
			
			if($('video').eq(i).find('source').attr('src') == '/fileadmin/Videos/Inhalt/Sonderprofile/IMAWIS_Beam_Weld_Animation_komplett_002_m.mp4') {
				
				$('video').eq(i).find('source').attr('src', '/fileadmin/Videos/Inhalt/Sonderprofile/IMAWIS_Beam_Weld_Animation_komplett_002.mp4');
			}
		}
	}
	
	$('img').removeAttr('width').removeAttr('height').attr('width', '100%');
	$('video').removeAttr('width').removeAttr('height').attr('width', '100%').removeAttr('controls').attr('autoplay', 'autoplay').attr('playsinline', 'playsinline').attr('loop', 'loop').attr('muted', 'muted');
	
	if($('#hamburger-button').is(':visible')) {
		
		if($(window).height() > $(window).width()) {
			$('#viewport').attr('content', 'width=768, user-scalable=no');
		} else {
			$('#viewport').attr('content', 'width=1280, user-scalable=no');
		}
		
		$(window).on("orientationchange", function() {
				
			setTimeout(function(){
				if(window.orientation == 0) {
					if($('.layout-wrapper #icon-nav-home-slider').length >= 1 || $('#icon-nav-slider').length >= 1) { location.reload(); }
					$('#viewport').attr('content', 'width=768, user-scalable=no');
				} else {
					if($('.layout-wrapper #icon-nav-home-slider').length >= 1 || $('#icon-nav-slider').length >= 1) { location.reload(); }
					$('#viewport').attr('content', 'width=1280, user-scalable=no');
				}
			}, 350);
		});
		
		$('#hamburger-button').click(function() {
			
			if($('#main-nav-outer #main-nav').is(':visible')) {
				$('#main-nav-outer #main-nav').slideUp(800, function() {});
			} else {
				$('#main-nav-outer #main-nav').slideDown(800);
			}
		});
	}
	
	$(window).resize(function() {
		
		if($('#media-area-home').length >= 1 && $('.tablet-portrait').is(':hidden')) {
			var mediaAreaHomeHeight = $(window).height() - $('#logo').outerHeight(true);
			$('#media-area-home').height(mediaAreaHomeHeight);
		}
		
		if($('#references-headline-mobile').length >= 1 && $('#references-headline-mobile').is(':visible')) {
			
			$('#references-nav-left, #references-nav-right').height($('#references-image').height());
		}
		
		if($('#hamburger-button').is(':hidden')) {
		
			var maxHeight = 0;
			for(var i = 0; i < $('.home-content-item').length; i++) {
				
				if(maxHeight < $('.home-content-item').eq(i).height()) {
					maxHeight = $('.home-content-item').eq(i).height();
					Math.round(maxHeight);
				}
			}
			
			for(var i = 0; i < $('.home-content-item').length; i++) {
				
				if(maxHeight > $('.home-content-item').eq(i).height()) {
					
					var newMargin = maxHeight - $('.home-content-item').eq(i).height();
					$('.home-content-item').eq(i).find('.text-center').css('margin-top', newMargin + 'px');
				}
			}
		}
	});
	
	if($('#media-area-home').length >= 1 && $('.tablet-portrait').is(':hidden')) {
	
		$('.home-header-content-item').click(function() {
			
			$('body, html').stop().animate({scrollTop: ($('#media-area-home').outerHeight(true) + $('#logo').outerHeight(true) - $('.home-header-content').outerHeight(true)) + 'px'}, 'slow', function() {});
		});
	}
	
	if($('#references-headline-mobile').length >= 1 && $('#references-headline-mobile').is(':visible')) {
			
		$('#references-nav-left, #references-nav-right').height($('#references-image').height());
	}
	
	/*********
	** SLIDER & NAVIGATION (Home Page)
	*********/
	
	if($('#slider-nav').length >= 1) {
			
		var clicked = false;
		var max = $('.slider-item').length - 1;
		if($('#hamburger-button').is(':visible')) {
			var speed = 300;
		} else {
			var speed = 1000;
		}
		
		// Swipe Function
		$('.slider-item, .slider-item-first, .layout-wrapper-content-all-width').swipe({
			allowPageScroll:"auto", 
			swipe:function(event, direction, distance, duration, fingerCount) {
				
				clicked = true;
				var dataID = 0;
				
				for(var i = 0; i <= $('#slider-nav div').length; i++) {
					
					if($('#slider-nav div').eq(i).attr('class') == 'slider-nav-item-act') {
						dataID = $('#slider-nav div').eq(i).attr('data');
						dataID = parseInt(dataID);
					}
				}
				
				if(direction == 'left') {
					dataID = dataID + 1;
					if(dataID >= $('#slider-nav div').length) {
						dataID = 0;
					}
				}

				if(direction == 'right') {
					dataID = dataID - 1;
					if(dataID < 0) {
						dataID = $('#slider-nav div').length - 1;
					}
				}
				
				if(dataID == 0) {
					if(direction == 'left') {
						/*$('.slider-item').hide("slide", { direction: "left" }, 300);*/
						$('.slider-item').fadeOut(300);
					}
					if(direction == 'right') {
						/*$('.slider-item').hide("slide", { direction: "right" }, 300);*/
						$('.slider-item').fadeOut(300);
					}
				} else {
					
					for(var i = 0; i <= $('#slider-nav div').length; i++) {
							
						if(i < dataID) {
							if(direction == 'left') {
								/*$('.slider-item').eq(i).show("slide", { direction: "right" }, 300);*/
								$('.slider-item').eq(i).fadeIn(300);
							}
							if(direction == 'right') {
								/*$('.slider-item').eq(i).show("slide", { direction: "left" }, 300);*/
								$('.slider-item').eq(i).fadeIn(300);
							}
						} else {
							/*$('.slider-item').eq(i).hide("slide", { direction: "right" }, 300);*/
							$('.slider-item').eq(i).fadeOut(300);
						}
					}
				}
				
				$('#slider-nav div').removeAttr('class').addClass('slider-nav-item');
				for(var i = 0; i <= $('#slider-nav div').length; i++) {
					
					if(i == dataID) {
						$('#slider-nav div').eq(i).removeAttr('class').addClass('slider-nav-item-act');
					}
				}
			}
			
		});
		
		if($('.slider-item').length < 1) {
			
			$('#slider-nav-left, #slider-nav-right, #slider-nav').hide();
		}
		
		$('#slider-nav-right').click(function() {
			
			clicked = true;
			var dataID = 0;
			
			for(var i = 0; i <= $('#slider-nav div').length; i++) {
				
				if($('#slider-nav div').eq(i).attr('class') == 'slider-nav-item-act') {
					dataID = $('#slider-nav div').eq(i).attr('data');
					dataID = parseInt(dataID);
				}
			}
			
			dataID = dataID + 1;
			if(dataID >= $('#slider-nav div').length) {
				dataID = 0;
			}
			
			if(dataID == 0) {
				
				/*$('.slider-item').hide("slide", { direction: "left" }, speed);*/
				$('.slider-item').fadeOut(speed);
				
			} else {
				
				for(var i = 0; i <= $('#slider-nav div').length; i++) {
						
					if(i < dataID) {
						/*$('.slider-item').eq(i).show("slide", { direction: "right" }, speed);*/
						$('.slider-item').eq(i).fadeIn(speed);
					} else {
						/*$('.slider-item').eq(i).hide("slide", { direction: "right" }, speed);*/
						$('.slider-item').eq(i).fadeOut(speed);
					}
				}
			}
			
			$('#slider-nav div').removeAttr('class').addClass('slider-nav-item');
			for(var i = 0; i <= $('#slider-nav div').length; i++) {
				
				if(i == dataID) {
					$('#slider-nav div').eq(i).removeAttr('class').addClass('slider-nav-item-act');
				}
			}
		});
		
		$('#slider-nav-left').click(function() {
			
			clicked = true;
			var dataID = 0;
			
			for(var i = 0; i <= $('#slider-nav div').length; i++) {
				
				if($('#slider-nav div').eq(i).attr('class') == 'slider-nav-item-act') {
					dataID = $('#slider-nav div').eq(i).attr('data');
					dataID = parseInt(dataID);
				}
			}

			dataID = dataID - 1;
			if(dataID < 0) {
				dataID = $('#slider-nav div').length - 1;
			}
			
			if(dataID == 0) {
				
				for(var i = 0; i <= $('#slider-nav div').length; i++) {
					/*$('.slider-item').eq(i).hide("slide", { direction: "right" }, speed);*/
					$('.slider-item').eq(i).fadeOut(speed);
				}
				
			} else {
				
				for(var i = 0; i <= $('#slider-nav div').length; i++) {
						
					if(i < dataID) {
						/*$('.slider-item').eq(i).show("slide", { direction: "left" }, speed);*/
						$('.slider-item').eq(i).fadeIn(speed);
					} else {
						/*$('.slider-item').eq(i).hide("slide", { direction: "right" }, speed);*/
						$('.slider-item').eq(i).fadeOut(speed);
					}
				}
			}
			
			$('#slider-nav div').removeAttr('class').addClass('slider-nav-item');
			for(var i = 0; i <= $('#slider-nav div').length; i++) {
				
				if(i == dataID) {
					$('#slider-nav div').eq(i).removeAttr('class').addClass('slider-nav-item-act');
				}
			}
		});
		
		$('#slider-nav div').click(function() {
			
			clicked = true;
			var dataID = $(this).attr('data');
			
			if(dataID == 0) {
				for(var i = 0; i <= $('#slider-nav div').length; i++) {
					/*$('.slider-item').eq(i).hide("slide", { direction: "right" }, speed);*/
					$('.slider-item').eq(i).fadeOut(speed);
				}
			} else {
				
				for(var i = 0; i <= $('#slider-nav div').length; i++) {
				
					if(i < dataID) {
						/*$('.slider-item').eq(i).show("slide", { direction: "right" }, speed);*/
						$('.slider-item').eq(i).fadeIn(speed);
					} else {
						/*$('.slider-item').eq(i).hide("slide", { direction: "right" }, speed);*/
						$('.slider-item').eq(i).fadeOut(speed);
					}
				}
			}
			
			$('#slider-nav div').removeAttr('class').addClass('slider-nav-item');
			for(var i = 0; i <= $('#slider-nav div').length; i++) {
				
				if(i == dataID) {
					$('#slider-nav div').eq(i).removeAttr('class').addClass('slider-nav-item-act');
				}
			}
		});

		var number = 0;
		window.setInterval(function() {
						
			if(clicked == false && $('#slider-nav').is(':visible')) {
			
				for(var i = 0; i <= $('#slider-nav div').length; i++) {
						
					if($('#slider-nav div').eq(i).attr('class') == 'slider-nav-item-act') {
						number = i + 1;
					}
				}
        
				if(number >= $('#slider-nav div').length) {
					number = 0;
          $('.slider-item').hide();
				}
        
				$('#slider-nav div').removeAttr('class').addClass('slider-nav-item');
				$('#slider-nav div').eq(number).removeAttr('class').addClass('slider-nav-item-act');
				
				for(var i = 0; i <= $('.slider-item').length; i++) {
					
					if($('.slider-item').eq(i).is(':visible')) {
					
					} else {
						/*$('.slider-item').eq(i).show('slide', {direction: 'right'}, speed);*/
						$('.slider-item').eq(i).fadeIn(speed);
						return false;
					}
				}
				
				for(var i = 0; i <= $('.slider-item').length; i++) {
					
					if(i >= 0 && i < max) {
						/*$('.slider-item').eq(i).hide('slide', {direction: 'left'}, speed);*/
						$('.slider-item').eq(i).fadeOut(speed);
					} else if (i == max) {
						/*$('.slider-item').eq(max).hide('slide', {direction: 'left'}, speed);*/
						$('.slider-item').eq(max).fadeOut(speed);
					}
				}
				
			}
			
		}, 8000);
	}
	
	
	/*********
	** Info Bubbles
	*********/
	
	if($('.info-bubbles').length >= 1) {
		
		var k = 0;
		for(var i = 0; i <= $('.layout-wrapper-content-all-width > div').length; i++) {
			
			if($('.layout-wrapper-content-all-width > div').eq(i).hasClass('product-info') == true) {
				k++;
				$('.layout-wrapper-content-all-width > div').eq(i).addClass('product-info-'+k);
			}
			
			if($('.layout-wrapper-content-all-width > div').eq(i).hasClass('info-bubbles') == true) {
				
				var posArray = $('.layout-wrapper-content-all-width > div').eq(i).find('header > h2').text().trim().split(',');
				
				$('.product-info-'+k).find('.ce-gallery').prepend('<div class="info-bubble-holder info-bubble-holder-'+i+'" data="'+i+'" style="top:' + posArray[1] + '%; left:' + posArray[0] + '%"><div class="info-bubble-holder-inner"><div class="dots dot1"></div><div class="dots dot2"></div><div class="dots dot3"></div></div></div>');
				$('.product-info-'+k).find('.ce-gallery').prepend('<div class="info-bubble-text info-bubble-text-'+i+'" data="'+i+'">'+$('.layout-wrapper-content-all-width > div').eq(i).find('.ce-bodytext').html()+'<div class="info-close"></div></div>');
			}
		}
		
		$('.info-bubble-holder').hover(function() {
				
				if($('#hamburger-button').is(':visible')) {
			
					for(var i = 0; i <= $('.product-info').length; i++) {
						
						if($('.product-info').eq(i).find('.info-bubble-text').length >= 1) {
							$('.product-info').eq(i).find('.info-bubble-text').height($('.product-info').eq(i).find('.ce-bodytext').outerHeight(true));
						}
					}
					
					/*var halfHeight = ($(this).parents('.product-info').position().top + ($(this).parents('.ce-gallery').height() / 2));
					$('body, html').animate({scrollTop: halfHeight + 'px'}, 'slow', function() {});*/
					$('body, html').animate({scrollTop: '+=' + '250px'}, 'slow', function() {});
				}
			
				$('.info-bubble-text-'+$(this).attr('data')).show();
			},
			function() {
				$('.info-bubble-text-'+$(this).attr('data')).hide();
			}
		);
	}
	
	
	/*********
	** References Nav
	*********/
	
	if($('#references-layout').length >= 1) {
	
		$('#references-nav-left').click(function() {
			
			var k = 0;
			for(var i = $('.references-images').length; i > 0; i--) {
				
				if($('.references-images').eq(i).is(':visible') && k == 0) {
					
					$('.references-images').eq(i).hide();
					k++;
				}
			}
			
			if(k == 0) {
				
				$('.references-images').eq(($('.references-images').length - 1)).show(0, function() {
					$('.references-images').delay(250).show();
					updateTexts();
				});
				
			}
			
			updateTexts();
		});
		
		$('#references-nav-right').click(function() {
			
			var k = 0;
			for(var i = 0; i <= $('.references-images').length; i++) {
				
				if($('.references-images').eq(i).is(':hidden') && k == 0) {
					
					$('.references-images').eq(i).show();
					k++;
				}
			}
			
			if(k == 0) {
				
				$('.references-images').hide();
				$('.references-images').eq(0).show();
			}
			
			updateTexts();
		});
		
		$('.references-images, .references-texts, #references-layout').swipe({
			allowPageScroll:"auto", 
			swipe:function(event, direction, distance, duration, fingerCount) {
				
				if(direction == 'right') {
					
					var k = 0;
					for(var i = 0; i <= $('.references-images').length; i++) {
						
						if($('.references-images').eq(i).is(':hidden') && k == 0) {
							
							$('.references-images').eq(i).show();
							k++;
						}
					}
					
					if(k == 0) {
						
						$('.references-images').hide();
						$('.references-images').eq(0).show();
					}
					
					updateTexts();
				}
				
				if(direction == 'left') {
					
					var k = 0;
					for(var i = $('.references-images').length; i > 0; i--) {
						
						if($('.references-images').eq(i).is(':visible') && k == 0) {
							
							$('.references-images').eq(i).hide();
							k++;
						}
					}
					
					if(k == 0) {
						
						$('.references-images').eq(($('.references-images').length - 1)).show(0, function() {
							$('.references-images').delay(250).show();
							updateTexts();
						});
						
					}
					
					updateTexts();
				}
			}
		});
		
	}
	
	function updateTexts() {
		
		$('.references-texts').hide(); var itIs = false;
		for(var i = $('.references-images').length; i >= 0; i--) {
			
			if($('.references-images').eq(i).is(':visible') && itIs == false) {
				$('.references-texts').eq(i).show();
				itIs = true;
			}
		}
	}
});
