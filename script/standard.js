const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".mobile-nav-toggle");


navToggle.addEventListener("click", ()=>{
    // nav links visible
    navMenu.classList.toggle("nav-open");

    // change open-close hamburguer icon
    navToggle.classList.toggle("icon-close");
});