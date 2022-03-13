let logo = document.querySelector('.header__logo');
var colors = ['#A41313', '#000', '#E88E5A', '#8F5973', '#333399', '#87413F', '#66FF00', '#98817B'];

let time = setTimeout(function Changer(){
	logo.style.color = colors[Math.round(Math.random() * 8 - 0.5)];

	time = setTimeout(Changer, 500);
}, 500)