$(function(){
	
	//scroll시 class 추가
	
 	 $(window).scroll(function(){
     	 if ($(this).scrollTop() > 90) {
         $('.logo').addClass('act');
         $('nav').addClass('act');
      } else {
         $('.logo').removeClass('act');
         $('nav').removeClass('act');
      }
     
	});
	
});

$(function(){
	// click 시 가장 상단으로 이동
    
	$('.act').click(function(){
	    $('html, body').animate({scrollTop : 0},600);
	    return false;
	}); 
});


function showFunction(){
	document.getElementsByClassName('skill_list')[0].style.display = "block";
}