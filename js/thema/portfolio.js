
// 스크롤시 header에 class 추가, 삭제
// let header = document.querySelector('header');

// window.addEventListener('scroll', function(){
// 	if (window.scrollY > 60){
// 		header.classList.add('active');
// 	} else{
// 		header.classList.remove('active');
// 	}
// });

// 더보기 창 끄기
// let closeList = [].slice.call(document.getElementsByClassName('close-btn'));
// let urlList = [].slice.call(document.getElementsByClassName('fixed-url'));
// function clickClose(){
// 	closeList.forEach(function(c){
// 		c.addEventListener('click', function(){
// 			this.parentElement.parentElement.style.display = 'none';
// 		});
// 	});
// }

// clickClose();

// 헤더 스크롤바
const scrollEvent = () => {
	let progressLine = $('.progress-line .active');
	let headerTopHeight = 100; //헤더 상단
	let scrollTop = window.scrollY;
	let docHeight = document.body.offsetHeight;
	let winHeight = window.innerHeight;
	let scrollPercent = scrollTop / (docHeight - winHeight) * 100;
	let winScroll = $(window).scrollTop();
	
	if(winScroll == 0){
		progressLine.width('100%');
	} else if (scrollTop > headerTopHeight || window.pageYOffset > headerTopHeight) {
		progressLine.width(`${scrollPercent}%`);
	} else {
		progressLine.width('0%');
	}
};

$(window).on('scroll', scrollEvent);

// animation.gsap
gsap.registerPlugin(ScrollTrigger);


gsap.from(".portfolio-title h1", {
	scrollTrigger: {
		trigger:".portfolio-title h1",
		start: "0% 45%",//시작 지점
    	end: "100% 80%",//끝 지점
    	scrub: 1
	},
	duration:0.7,
	opacity:0,
	y: 150
});

ScrollTrigger.matchMedia({
	"(min-width: 550px)": function() {
		gsap.from(".portfolio-wrap li:nth-of-type(1) ", {
			scrollTrigger: {
				trigger:".portfolio-wrap li:nth-of-type(1)",
				scrub: 1
			},
			duration: 0.4,
			x: -20
		});
		gsap.from(".portfolio-wrap li:nth-of-type(2) ", {
			scrollTrigger: {
				trigger:".portfolio-wrap li:nth-of-type(2)",
				scrub: 1
			},
			duration: 0.4,
			x: 20
		});
		gsap.from(".portfolio-wrap li:nth-of-type(3) ", {
			scrollTrigger: {
				trigger:".portfolio-wrap li:nth-of-type(3)",
				scrub: 1
			},
			duration: 0.4,
			x: -20
		});
		gsap.from(".portfolio-wrap li:nth-of-type(4) ", {
			scrollTrigger: {
				trigger:".portfolio-wrap li:nth-of-type(4)",
				scrub: 1
			},
			duration: 0.4,
			x: 20
		});
  	},
	"(min-width: 767px)": function() {
		gsap.to(".lastH1", {
			scrollTrigger: {
				trigger:".lastH1"
			},
			duration: 0.8,
			x: 50
		  });
		gsap.from(".firstH1", {
			scrollTrigger: {
				trigger:".firstH1"
			},
			duration: 0.8,
			x: 100
		});
		gsap.from(".skill-title h2", {
			scrollTrigger: {
				trigger:".skill-title h2",
				start: "0% 56%",//시작 지점
				end: "100% 80%",//끝 지점
				scrub: 3
			},
			opacity:0,
			y: -180
		});
		gsap.from(".portfolio-wrap li:nth-of-type(1) ", {
			scrollTrigger: {
				trigger:".portfolio-wrap li:nth-of-type(1)",
				scrub: 1
			},
			duration: 0.4,
			x: -180
		});
		gsap.from(".portfolio-wrap li:nth-of-type(2) ", {
			scrollTrigger: {
				trigger:".portfolio-wrap li:nth-of-type(2)",
				scrub: 1
			},
			duration: 0.4,
			x: 180
		});
		gsap.from(".portfolio-wrap li:nth-of-type(3) ", {
			scrollTrigger: {
				trigger:".portfolio-wrap li:nth-of-type(3)",
				scrub: 1
			},
			duration: 0.4,
			x: -180
		});
		gsap.from(".portfolio-wrap li:nth-of-type(4) ", {
			scrollTrigger: {
				trigger:".portfolio-wrap li:nth-of-type(4)",
				scrub: 1
			},
			duration: 0.4,
			x: 180
		});
		gsap.to(".descript1", {
			scrollTrigger: {
				trigger:".descript1",
				start: "0% 80%",//시작 지점
				end: "100% 10%",//끝 지점
				scrub: 1
			},
			x: 30
		});
		gsap.from(".descript2", {
			scrollTrigger: {
				trigger:".descript2",
				start: "0% 80%",//시작 지점
				end: "100% 10%",//끝 지점
				scrub: 1
			},
			x: 150
		});
		gsap.to(".descript3", {
			scrollTrigger: {
				trigger:".descript3",
				start: "0% 80%",//시작 지점
				end: "100% 10%",//끝 지점
				scrub: 1
			},
			x: 50
		});
  	},
	"(max-width: 767px)": function() {
		gsap.from(".lastH1", {
			scrollTrigger: {
				trigger:".lastH1"
			},
			duration: 0.8,
			y: 50
		  });
		gsap.from(".firstH1", {
			scrollTrigger: {
				trigger:".firstH1"
			},
			duration: 0.8,
			y: 100
		});
		gsap.from(".skill-title h2", {
			scrollTrigger: {
				trigger:".skill-title h2",
				start: "0% 56%",//시작 지점
				end: "100% 80%",//끝 지점
				scrub: 3
			},
			opacity:0,
			y: -120
		});
		gsap.from(".descript1", {
			scrollTrigger: {
				trigger:".descript1",
				start: "0% 80%",//시작 지점
				end: "100% 10%",//끝 지점
				scrub: 1
			},
			y: 80
		});
		gsap.from(".descript2", {
			scrollTrigger: {
				trigger:".descript2",
				start: "0% 80%",//시작 지점
				end: "100% 10%",//끝 지점
				scrub: 1
			},
			duration:0.8,
			y: 80
		});
		gsap.from(".descript3", {
			scrollTrigger: {
				trigger:".descript3",
				start: "0% 80%",//시작 지점
				end: "100% 10%",//끝 지점
				scrub: 1
			},
			duration:1,
			y: 80
		});
		
  	},
	  
	"(max-width: 550px)": function() {
		gsap.from(".skill-title h2", {
			scrollTrigger: {
				trigger:".skill-title h2",
				start: "",//시작 지점
				end: "1000% 900%",//끝 지점
				scrub: 3
			},
			opacity:0,
			y: -100
		});
		gsap.from(".portfolio-wrap li:nth-of-type(1)", {
			scrollTrigger: {
				trigger:".portfolio-wrap li:nth-of-type(1)",
				scrub: 1
			},
			opacity:0.5,
			y: 150
		});
		gsap.from(".portfolio-wrap li:nth-of-type(2) ", {
			scrollTrigger: {
				trigger:".portfolio-wrap li:nth-of-type(2)",
				scrub: 1
			},
			opacity:0.5,
			y: 150
		});
		gsap.from(".portfolio-wrap li:nth-of-type(3) ", {
			scrollTrigger: {
				trigger:".portfolio-wrap li:nth-of-type(3)",
				scrub: 1
			},
			opacity:0.5,
			y: 150
		});
		gsap.from(".portfolio-wrap li:nth-of-type(4) ", {
			scrollTrigger: {
				trigger:".portfolio-wrap li:nth-of-type(4)",
				scrub: 1
			},
			opacity:0.5,
			y: 150
		});
		
  	}

});