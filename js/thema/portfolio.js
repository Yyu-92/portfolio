
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
