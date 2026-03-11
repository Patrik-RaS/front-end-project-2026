const iconElement = document.querySelector(".menu-icon");
const ul = document.querySelector(".ulul");

iconElement.addEventListener("click", toggleMenu);

function toggleMenu(){
    ul.classList.toggle("active");
}