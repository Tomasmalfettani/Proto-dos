document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.querySelector('.bi-bag-fill');
    const cartOverlay = document.querySelector('.cart-overlay');

    cartIcon.addEventListener('click', function () {
        cartOverlay.classList.toggle('open');
    });

    cartOverlay.addEventListener('click', function (event) {
        if (event.target === cartOverlay) {
            cartOverlay.classList.remove('open');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.animated', {
        delay: 200,
        duration: 800,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-out',
        reset: true
    });
});
