// Javascript untuk Menambahkan Shadow pada Sticky Navbar
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navbar.classList.add("nav--shadow");
  } else {
    navbar.classList.remove("nav--shadow");
  }
});
