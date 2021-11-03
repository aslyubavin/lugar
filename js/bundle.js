/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/contactForm.js":
/*!***************************************!*\
  !*** ./src/js/modules/contactForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactForm() {
    const contactForm = document.querySelector('.contact__form'),
        nameInput = document.querySelector('input[name="name"]'),
        surnameInput = document.querySelector('input[name="surname"]'),
        emailInput = document.querySelector('input[name="email"]'),
        phoneInput = document.querySelector('input[name="phone"]'),
        descrArea = document.querySelector('textarea[name="descr"]'),
        contactError = document.querySelector('.contact__error'),
        modal = document.querySelector('.modal');

    function openModal() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactForm);

/***/ }),

/***/ "./src/js/modules/feedbackSlider.js":
/*!******************************************!*\
  !*** ./src/js/modules/feedbackSlider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function feedbackSlider() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (feedbackSlider);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function hamburger () {
    const hamburger = document.querySelector('.header__hamburger'),
    navMenu = document.querySelector('.header__nav'),
    navLink = navMenu.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        navMenu.classList.toggle('header__nav_active');
    });

    navLink.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            navMenu.classList.toggle('header__nav_active');
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);

/***/ }),

/***/ "./src/js/modules/pageUp.js":
/*!**********************************!*\
  !*** ./src/js/modules/pageUp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function pageUp() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageUp);

/***/ }),

/***/ "./src/js/modules/projectsSlider.js":
/*!******************************************!*\
  !*** ./src/js/modules/projectsSlider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function projectsSlider() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsSlider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_projectsSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projectsSlider */ "./src/js/modules/projectsSlider.js");
/* harmony import */ var _modules_feedbackSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/feedbackSlider */ "./src/js/modules/feedbackSlider.js");
/* harmony import */ var _modules_pageUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pageUp */ "./src/js/modules/pageUp.js");
/* harmony import */ var _modules_contactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contactForm */ "./src/js/modules/contactForm.js");








window.addEventListener('DOMContentLoaded', () => {
	(0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
	(0,_modules_projectsSlider__WEBPACK_IMPORTED_MODULE_1__["default"])();
	(0,_modules_feedbackSlider__WEBPACK_IMPORTED_MODULE_2__["default"])();
	(0,_modules_pageUp__WEBPACK_IMPORTED_MODULE_3__["default"])();
	(0,_modules_contactForm__WEBPACK_IMPORTED_MODULE_4__["default"])();
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map