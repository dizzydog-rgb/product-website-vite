const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')
const hambugerList = document.querySelector('.hambuger-list');

menuIcon.addEventListener('click', () => {
    hambugerList.classList.toggle('hambuger-list-show');
    menuIcon.classList.toggle('unshow');
    closeIcon.classList.toggle('show');
});

closeIcon.addEventListener('click', () => {
    hambugerList.classList.toggle('hambuger-list-show');
    closeIcon.classList.toggle('show');
    menuIcon.classList.toggle('unshow');
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

