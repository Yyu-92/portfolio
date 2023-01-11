//menu
$(document).ready(function(){
	/*$('.menu > ul > li').mouseover(function(){
		$(this).children('.sub-menu').stop().slideDown();
	});
	$('.menu > ul > li').mouseleave(function(){
		$(this).children('.sub-menu').hide();
	});*/
	
	$('.ham').click(function(){
		$('.menu').toggleClass('on');
		$(this).toggleClass('active');
		//mobile-menu
		$('.menu ul li').off();
		$('.menu ul li').click(function(){
			$(this).children('.sub-menu').stop().slideToggle();
		});
		return false;
	});
	
	//btn-up
	$('.btn-up').click(function(){
	    $('html, body').animate({scrollTop : 0},600);
	    return false;
	});
	
	
});

//scroll-menu
$(function(){
	 $(window).scroll(function () {
	        if ($(this).scrollTop() > 100) {
	        	//$('#header').addClass('scroll-menu');
	        	 $('.btn-up-wrap').fadeIn();
	        	 $('.gr-intro').addClass('active');
	        	 $('.scrollMotion').addClass('active');
	        	 $('.open').addClass('scroll')
	        } else {
	        	// $('#header').removeClass('scroll-menu');
	        	 $('.btn-up-wrap').fadeOut();
	        	 $('.gr-intro').removeClass('active');
	        	 $('.scrollMotion').removeClass('active');
	        	 $('.open').removeClass('scroll')
	        }
	    });
	 
	 $(window).scroll(function () {
	        if ($(this).scrollTop() > 250) {
	        	 $('.history').addClass('active');
	        	 $('.ht .title .intro').addClass('active');
	        } else {
	        	 $('.history').removeClass('active');
	        	 $('.ht .title .intro').removeClass('active');
	        }
	    });
	
	//nav-menu
	$('.nav-menu').click(function(){
		$(this).children('ul').stop().slideToggle();
		$(this).toggleClass('nav-active');
		//return false;
	});
	
	// $(window).scroll(function(){
	// 	var scrollT = $(window).scrollTop();
		

	// 	if(){
	// 		$('#shop').css({"opacity":"0"});
	// 	} else{
	// 		$('#shop').css({"opacity":"1"});
	// 	}
	// })
	

});







