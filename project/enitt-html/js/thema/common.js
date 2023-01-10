//main-menu
$('.main-menu > ul > li').mouseover(function(){
	$('#header').addClass("act");
	//$(this).addClass("act");
});
$('.main-menu > ul > li').mouseleave(function(){	
	$('#header').removeClass("act");
	//$(this).removeClass("act");
});

//lang
$('.lang > button').click(function(){
	$('.lang ul').stop().slideToggle();
});

//mobile-menu
$('.ham').click(function(){
	$('.main-menu ul li').off();
	$(this).toggleClass('active');	
	$('.main-menu').toggleClass('on');
	$('.blind').toggle()
	//$('.scroll-menu').off();
	$('.main-menu ul li').click(function(){
		$(this).children('.sub-menu').stop().slideToggle();
	});
	return false;
});

$('.blind').click(function(){
	$('.ham').toggleClass('active');
	$('.main-menu').toggleClass('on');
	$('.blind').css('display','none');
});

$('.close').click(function(){
	$(this).hide();
	$('.open').show();
	$('.main-menu').animate({'right':'-100%'});
	$('.blind').css('display','none');
});

//btn-motion
$(function(){
	 $(window).scroll(function () {
	        if ($(this).scrollTop() > 100) {        	
	        	$('.btn-up').fadeIn();
	        } else {
	             $('.btn-up').fadeOut();
	        }
	    });

	 //btn-up
	$('.btn-up').click(function(){
	    $('html, body').animate({scrollTop : 0},600);
	    return false;
	});
});

//sub-navi
	 $('.sub-nav > button').click(function(){
			$(this).toggleClass('on');
			$('.sub-nav ul').stop().slideToggle();
		});
	 
//solution-hover
	 $('.solList > li:first-child').addClass('on');
		$('.solList > li div').on({
			mouseenter: function () {
				$('.solList > li').removeClass('on');
				$(this).parent().addClass('on');
			}
		})
		$('.solList').on('mouseleave', function () {
				$('.solList > li').removeClass('on');
				$('.solList > li:first-child').addClass('on');
		})

		$(".solList > li div").focusin(function(){	
			$('.solList > li').removeClass('on');
			$(this).parent().addClass('on');	
		});
		$(".solList > li div").focusout(function(){	
			$(this).parent().removeClass('on');	
		});
		$('.solList').on('focusout', function () {
			$('.solList > li:first-child').addClass('on');
		});
		
		$( document ).ready(function() {		
			$(".menu-btn").on('click',function(){
				$('#header').toggleClass("on");
				$(this).toggleClass("open");
				
			 });
			
			//sub-top
			//$('.instance-bg').addClass('bg-loaded')
		});
		
	





