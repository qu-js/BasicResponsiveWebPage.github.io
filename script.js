const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

if(toggleBtn === null){
    console.log("Error, toggleBtn is null");
}

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});