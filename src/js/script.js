'use strict';

import hamburger from './modules/hamburger';
import projectsSlider from './modules/projectsSlider';
import feedbackSlider from './modules/feedbackSlider';
import pageUp from './modules/pageUp';
import contactForm from './modules/contactForm';

window.addEventListener('DOMContentLoaded', () => {
	hamburger();
	projectsSlider();
	feedbackSlider();
	pageUp();
	contactForm();
});

