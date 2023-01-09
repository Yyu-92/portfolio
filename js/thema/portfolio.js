// 스크롤시 header에 class 추가, 삭제
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
	if (window.scrollY > 60){
		header.classList.add('active');
	} else{
		header.classList.remove('active');
	}
});

// 더보기 창 끄기
let closeList = [].slice.call(document.getElementsByClassName('close-btn'));
let urlList = [].slice.call(document.getElementsByClassName('fixed-url'));
function clickClose(){
	closeList.forEach(function(c){
		c.addEventListener('click', function(){
			this.parentElement.parentElement.style.display = 'none';
		});
	});
}

clickClose();



	
