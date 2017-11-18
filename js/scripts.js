

$(function() {
	var carouselUl = $('#carousel ul');
	function changeSlide() {
		carouselUl.animate({'marginLeft':-500}, 2000, moveFirstSlide);
	};



	function moveFirstSlide () {
		var firstLi = carouselUl.find("li:first");
		var lastLi = carouselUl.find("li:last");
		lastLi.after(firstLi);
		carouselUl.css({'marginLeft':-500});
	};


	function moveLastSlide () {
		var firstLi = carouselUl.find("li:first");
		var lastLi = carouselUl.find("li:last");
		firstLi.before(lastLi);
		carouselUl.css({'marginLeft':-500});	

	};


	var btnLeft = $('#btn-left');
	var btnRight = $('#btn-right');

	(btnLeft).click(function(){
		carouselUl.animate({'marginLeft':0}, 2000, moveLastSlide);
	});

	(btnRight).click(function(){
		carouselUl.animate({'marginLeft':-1000}, 2000, moveFirstSlide);
	});

});