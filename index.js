const hamburger = document.querySelector(".navbtn__1");
const navbar = document.querySelector(".navbar-container");
const navlinks = document.querySelectorAll(".nav-links li a");

function eventListerner() {
  hamburger.classList.toggle("dis-none");
  navbar.classList.toggle("dis-none");
}
for (let i = 0; i < navlinks.length; i++) {
  document
    .querySelectorAll(".nav-links li a")
    [i].addEventListener("click", eventListerner);
}
document.querySelector(".navbtn__1").addEventListener("click", eventListerner);

document.querySelector(".navbtn__2").addEventListener("click", eventListerner);
