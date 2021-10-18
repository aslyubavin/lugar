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

export default feedbackSlider;