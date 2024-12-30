const menuBtn = document.getElementById("menu-btn");
const mobileNavigation = document.querySelector(".site-navigation-mobile");

menuBtn.addEventListener("click", function () {
  mobileNavigation.classList.toggle("navigation-active");
});
