'use strict';

window.addEventListener('DOMContentLoaded', () => {

	const hamburger = document.querySelector('.header__hamburger'),
		  navMenu = document.querySelector('.header__nav');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('header__hamburger_active');
		navMenu.classList.toggle('header__nav_active');
	});

});