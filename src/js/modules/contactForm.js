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

export default contactForm;