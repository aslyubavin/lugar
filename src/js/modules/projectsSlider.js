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

export default projectsSlider;