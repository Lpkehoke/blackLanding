$('.slider').slick({
	dots: true,
	slidesToShow: 2,
	slidesToScroll: 2
});

var scrolled = false;
var menu = document.querySelector('.header');
var upButton = document.querySelector('.up-button');

window.onscroll = function() {
	if (window.pageYOffset > 100 && !scrolled) {
		menu.classList.toggle('__visible-menu');
		upButton.classList.toggle('__visible-upButton');
		scrolled = true;
	}

	if (window.pageYOffset < 100 && scrolled) {
		menu.classList.toggle('__visible-menu');
		upButton.classList.toggle('__visible-upButton');
		scrolled = false;
	}
}