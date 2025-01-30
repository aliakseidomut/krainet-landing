const burgerButton = document.getElementById("burger-button");
const burgerMenu = document.getElementById("burger-menu");
const closeButton = document.getElementById("close-button");

burgerButton.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");
});

closeButton.addEventListener("click", function () {
  burgerMenu.classList.remove("active");
});
