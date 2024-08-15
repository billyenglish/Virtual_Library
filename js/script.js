const lightModeButton = document.querySelector('.fa-sun');

lightModeButton.addEventListener('click', () => {
    lightModeButton.style.display = "none";
    darkModeButton.style.display = "flex";
    alert('Light Mode');
});

const darkModeButton = document.querySelector('.fa-moon');

darkModeButton.addEventListener('click', () => {
    darkModeButton.style.display = "none";
    lightModeButton.style.display = "flex";
    alert('Dark Mode')
})

const hamburgerMenu = document.querySelector('.hamburger-menu');

const openMenu = () => {
    const formMenu = document.querySelector('.menu');
    formMenu.style.display = "flex";
}

hamburgerMenu.addEventListener('click', openMenu);

const closeIcon = document.querySelector('.close-icon');

const closeMenu = () => {
    const formMenu = document.querySelector('.menu');
    formMenu.style.display = "none";
    return;
}

closeIcon.addEventListener('click', closeMenu);
