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

