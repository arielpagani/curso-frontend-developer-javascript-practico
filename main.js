const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector(`.menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);

navbarEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}
burguerMenu.addEventListener("click", toogleMobileMenu);

function toogleMobileMenu() {
  mobileMenu.classList.toggle(`inactive`);
}