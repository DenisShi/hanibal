const burger_menu = document.querySelector('.burgerBtn_menu');
const navbar = document.querySelector('.navbar')
const navbarBurger = document.querySelector('.navbar_burger')

function toggleMenu() {
    const burgerBtn = document.querySelector('.burgerBtn_menu');
    burgerBtn.classList.toggle('active');
    navbarBurger.classList.toggle("navbar_burger-active");
  }