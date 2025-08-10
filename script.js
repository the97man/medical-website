document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const navMenu = document.querySelector(".navbar-nav");

  toggler.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
