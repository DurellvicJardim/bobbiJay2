document.addEventListener('DOMContentLoaded', () => {
    // Burger Menu Logic
    var burgerMenu = document.querySelector('.burger-menu');
    var navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Scroll Animation
    var elements = document.querySelectorAll('.scroll-element');
    var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

    // On Page Highlight
    var currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '' || currentPage === 'index.html') {
        document.getElementById('home').classList.add('active');
    } else if (currentPage === 'projects.html') {
        document.getElementById('projects').classList.add('active');
    } else if (currentPage === 'blog.html') {
        document.getElementById('blog').classList.add('active');
    } else if (currentPage === 'about.html') {
        document.getElementById('about').classList.add('active');
    } else if (currentPage === 'contact.html') {
        document.getElementById('contact').classList.add('active');
    }

    // Popup Logic
    var form = document.getElementById('contact-form');
    var popup = document.getElementById('popup');
    var validationPopup = document.getElementById('validation-popup');
    var closePopupButton = document.getElementById('close-popup');
    var closeValidationPopupButton = document.getElementById('close-validation-popup');

    popup.classList.add('hidden');
    validationPopup.classList.add('hidden');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value.trim();
        var tel = document.getElementById('tel').value.trim();
        var email = document.getElementById('email').value.trim();
        var subject = document.getElementById('subject').value.trim();
        var country = document.getElementById('country').value;

        if (name && tel && email && subject && country) {
            popup.classList.remove('hidden');
        } else {
            validationPopup.classList.remove('hidden');
        }
    });

    closePopupButton.addEventListener('click', function() {
        popup.classList.add('hidden');
    });

    closeValidationPopupButton.addEventListener('click', function() {
        validationPopup.classList.add('hidden');
    });
});
