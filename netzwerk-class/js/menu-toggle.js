//  Javascript untuk menu-toggle
const menuToggle = document.querySelector(".menu-toggle input");
const menuToggler = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");
const body = document.querySelector("body");
// Menu Toggle Ketika diklik memnuculkan class slide
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  menuToggler.classList.add("active");
  body.style.position = "fixed";
});
// Remove class slide pada menu-toggle ketika nav-link diklik
document.onclick = function (event) {
  if (!event.target.matches(".menu-toggle input")) {
    nav.classList.remove("slide");
    menuToggler.classList.remove("active");
    menuToggle.checked = false;
    body.style.position = null;
  }
};

if (menuToggle) {
  menuToggle.addEventListener("change", function () {
    if (this.checked) {
      body.style.position = "fixed";
    } else {
      body.style.position = null;
    }
  });
}
