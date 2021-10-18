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

export default hamburger;