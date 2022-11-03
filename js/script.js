const sliderButtomn = document.querySelector(".header__swap-button");
const slider = document.getElementsByClassName("__slider");

if (sliderButtomn) {
	let currentSlide = -1;
	setTimeout(autoslider = function autoslider(){
		currentSlide++;
		for (let item of slider){
			for(let i = 0; i < item.children.length; i++){
				item.children[i].classList.remove("__slider_active");
				sliderButtomn.children[i].classList.remove("header__swap-button_active");
			}
		}
		if (currentSlide === 3)
			currentSlide = 0;
			
		sliderButtomn.children[currentSlide].classList.add("header__swap-button_active");
		for (let item of slider){
			item.children[currentSlide].classList.add("__slider_active");
		}
	}, 0);
	let timer = setInterval(autoslider, 3600);
	sliderButtomn.addEventListener('click', event => {
		if (event.target.closest('.slider__button')) {
			currentSlide = event.target.id.toString().slice(-1) - 1;
			clearInterval(timer);
			timer = setInterval(autoslider, 3600);
			autoslider();
		}
	});
}



const menuLogo = document.querySelector(".menu__logo");
const menu = document.querySelector(".menu");

menuLogo.addEventListener('click', event => {
	menu.classList.toggle("menu_active");
	menuLogo.classList.toggle("menu__logo_active");
	if (menu.classList.contains("menu_active")) {
		document.body.style.overflow = 'hidden';
	}
	else
		document.body.style.overflow = '';

});

const scrollContainer = document.querySelector('.header__menu-container');

window.addEventListener('scroll', function(e) {
    if (window.scrollY >= 100) {
    	scrollContainer.classList.add("header__menu-container_active");
    }
    else if (window.scrollY < 130) {
    	scrollContainer.classList.remove("header__menu-container_active");
    }
   
});

const teamatesImages = document.querySelector(".teamates__slide-images");
const teamateSlider = document.querySelector(".teamates__swap-buttons");
if (teamateSlider) {
	for(let i = 0; i < teamatesImages.children.length; i++){
		teamateSlider.insertAdjacentHTML('beforeend', `<button id="teamates__swap-button${i}" class="teamates__swap-button"></button>`);
	}
	setTimeout(secondSlider, 0);
	let secondTimer = setInterval(secondSlider, 3600);
	let secondcurrentSlide = -1;

	function secondSlider(){
		for (let i = 0; i < teamatesImages.children.length; i++) {
			teamateSlider.children[i].classList.remove("teamates__swap-button_active");
			teamatesImages.children[i].classList.remove("teamates__slide-images_active");
		}

		secondcurrentSlide++;
		if(secondcurrentSlide < 0){
			secondcurrentSlide = teamateSlider.children.length -1;
		}
		else if (secondcurrentSlide >= teamateSlider.children.length) {
			secondcurrentSlide = 0;
		}
		teamatesImages.children[secondcurrentSlide].classList.add("teamates__slide-images_active");
		teamateSlider.children[secondcurrentSlide].classList.add("teamates__swap-button_active");
	}

	teamateSlider.addEventListener('click', event => {
		if (event.target.closest('.teamates__swap-button')) {
			secondcurrentSlide = event.target.id.toString().slice(-1) - 1;
			clearInterval(secondTimer);
			secondTimer = setInterval(secondSlider, 3600);
			secondSlider();
		}
	});

	const rightArr = document.querySelector(".teamates__slide_right-arr");
	const leftArr = document.querySelector(".teamates__slide_left-arr");

	rightArr.addEventListener('click', event => {
		clearInterval(secondTimer);
		secondSlider();
		secondTimer = setInterval(secondSlider, 3600);
	});

	leftArr.addEventListener('click', event => {
		secondcurrentSlide -= 2;
		clearInterval(secondTimer);
		secondSlider();
		secondTimer = setInterval(secondSlider, 3600);
	});
}



const popup = document.querySelector(".popup-call-back");
const phone = document.querySelector(".phone");

phone.addEventListener('click', event => {
	popup.classList.add("popup-call-back_active");
	popup.children[0].classList.add("popup-call-back__body_active");
	if (popup.classList.contains("popup-call-back_active")) {
		document.body.style.overflow = 'hidden';
	}
});
popup.addEventListener("click", event=>{
	console.log(event.target);
	if (event.target.classList.contains('popup-call-back') || event.target.classList.contains('popup-call-back__close')) {
		popup.classList.remove("popup-call-back_active");
		popup.children[0].classList.remove("popup-call-back__body_active");
		document.body.style.overflow = '';
	}
});

const binCounter = document.querySelector(".bucket");

if (binCounter){
	binCounter.children[0].innerHTML = JSON.parse(localStorage.getItem("cart")).length;
}