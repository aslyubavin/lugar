'use strict';

window.addEventListener('DOMContentLoaded', () => {

	const hamburger = document.querySelector('.header__hamburger'),
		navMenu = document.querySelector('.header__nav');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('header__hamburger_active');
		navMenu.classList.toggle('header__nav_active');
	});



	//======================================================
	const projectsSlides = document.querySelectorAll('.projects__slide'),
		projectsSliderWindow = document.querySelector('.projects__slider-wrapper'),
		projectsSliderInner = document.querySelector('.projects__slider-inner'),
		projectsArrowPrev = document.querySelector('.projects__arrow-prev'),
		projectsArrowNext = document.querySelector('.projects__arrow-next');


	function slideProjects(sliderWindowSelector, sliderInnerSelector, slidesSelector, arrowPrevSelector, arrowNextSelector) {
		const sliderWindowMaxWidth = +window.getComputedStyle(sliderWindowSelector).maxWidth.slice(0, (window.getComputedStyle(sliderWindowSelector).maxWidth.length - 2));
		const sliderWindowWidth = +window.getComputedStyle(sliderWindowSelector).width.slice(0, (window.getComputedStyle(sliderWindowSelector).width.length - 2));
		const slideWidth = +window.getComputedStyle(slidesSelector[0]).width.slice(0, (window.getComputedStyle(slidesSelector[0]).width.length - 2));
		const offsetValue = ((sliderWindowMaxWidth - slideWidth * Math.floor(sliderWindowMaxWidth / slideWidth)) / (Math.floor(sliderWindowMaxWidth / slideWidth) - 1)) + slideWidth;
		let slideIndex = 0,
			offset = 0;

		arrowNextSelector.addEventListener('click', e => {
			// e.preventDefault();

			slideIndex++;
			offset += offsetValue;

			if (slideIndex > (slidesSelector.length - Math.floor(sliderWindowWidth / slideWidth))) {
				slideIndex = 0;
				offset = 0;
			}
			sliderInnerSelector.style.transform = `translateX(-${offset}px)`;
		});

		arrowPrevSelector.addEventListener('click', e => {
			// e.preventDefault();

			slideIndex--;
			offset -= offsetValue;

			if (slideIndex < 0) {
				slideIndex = slidesSelector.length - Math.floor(sliderWindowWidth / slideWidth);
				offset = offsetValue * (slidesSelector.length - Math.floor(sliderWindowWidth / slideWidth));
			}
			sliderInnerSelector.style.transform = `translateX(-${offset}px)`;
		});
	}

	slideProjects(projectsSliderWindow, projectsSliderInner, projectsSlides, projectsArrowPrev, projectsArrowNext);

	//======================================================

	const feedbackSlides = document.querySelectorAll('.feedback__item'),
		feedbackArrowPrev = document.querySelector('.feedback__arrow-prev'),
		feedbackArrowNext = document.querySelector('.feedback__arrow-next');

	function slideFeedback(slidesSelector, slideActiveClass, arrowPrevSelector, arrowNextSelector) {
		let slideIndex = 0;

		arrowNextSelector.addEventListener('click', e => {
			e.preventDefault();

			slidesSelector.forEach(slide => {
				slide.classList.remove(slideActiveClass);
			});

			slideIndex++;

			if (slideIndex > (slidesSelector.length - 1)) {
				slideIndex = 0;
			}

			slidesSelector[slideIndex].classList.add(slideActiveClass);
		});

		arrowPrevSelector.addEventListener('click', e => {
			e.preventDefault();

			slidesSelector.forEach(slide => {
				slide.classList.remove(slideActiveClass);
			});

			slideIndex--;

			if (slideIndex < 0) {
				slideIndex = slidesSelector.length - 1;
			}

			slidesSelector[slideIndex].classList.add(slideActiveClass);
		});
	}

	slideFeedback(feedbackSlides, 'feedback__item_active', feedbackArrowPrev, feedbackArrowNext);

	//================================================================
	const pageUp = document.querySelector('.pageup');

	window.addEventListener('scroll', () => {
		let windowY = +window.scrollY;

		if (windowY > 800) {
			pageUp.style.opacity = '0.7';
		} else {
			pageUp.style.opacity = '0';
		}
	});

	pageUp.addEventListener('click', (e) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	//================================================================
	const contactForm = document.querySelector('.contact__form'),
		nameInput = document.querySelector('input[name="name"]'),
		surnameInput = document.querySelector('input[name="surname"]'),
		emailInput = document.querySelector('input[name="email"]'),
		phoneInput = document.querySelector('input[name="phone"]'),
		descrArea = document.querySelector('textarea[name="descr"]'),
		contactError = document.querySelector('.contact__error'),
		modal = document.querySelector('.modal');

	function openModal () {
		modal.style.display = 'block';

		modal.addEventListener('click', (e) => {
			if (e.target.classList.contains('modal__close') || e.target === modal) {
				modal.style.display = 'none';
			}
		});
	}

	contactForm.addEventListener('submit', (e) => {
		let messages = [];
		e.preventDefault();
		if (nameInput.value === '' || nameInput === null) {
			messages.push('Name is required');
		}

		if (nameInput.value.length > 20) {
			messages.push('Name must be less than 20 characters');
		}

		if (surnameInput.value === '' || surnameInput === null) {
			messages.push('Last name is required');
		}
		
		if (surnameInput.value.length > 20) {
			messages.push('Last name must be less than 20 characters');
		}

		if (/\d/ig.test(nameInput.value) || /\d/ig.test(surnameInput.value)) {
			messages.push('Are you sure you entered your name correctly?');
		}

		if (emailInput.value.length > 30) {
			messages.push('Email adress must be less than 30 characters');
		}

		if (phoneInput.value.length > 16) {
			messages.push('Phone number must be less than 16 characters');
		}

		if (descrArea.value.length > 100) {
			messages.push('Phone number must be less than 100 characters');
		}

		if (messages.length > 0) {
			e.preventDefault();
			contactError.innerText = messages.join('. ');
		} else {
			contactForm.reset();
			contactError.innerText = "";
			openModal();
		}
	});
});

