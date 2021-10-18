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

export default pageUp;