let toggleBtn = document.getElementsByClassName("toggle-button")[0];
let navbarLinks = document.getElementsByClassName("navbar-links")[0];
let hero = document.getElementsByClassName(".hero");

toggleBtn.addEventListener("click", (e) => {
  navbarLinks.classList.toggle("active");
  if (navbarLinks.classList.contains("active")) {
    navbarLinks.addEventListener("click", () => {
      navbarLinks.classList.remove("active");
    });
  }
  e.preventDefault();
});
