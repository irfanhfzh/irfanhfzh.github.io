// Hover(mouseover) / Click Events for Detail Product Page
let thumbnails = document.getElementsByClassName("thumbnail-img");
let activeImages = document.getElementsByClassName("active-thumbnail");

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function () {
    if (activeImages.length > 0) {
      activeImages[0].classList.remove("active-thumbnail");
    }

    this.classList.add("active-thumbnail");
    document.getElementById("main-image").src = this.src;
    document.getElementById("product-image").href = this.src;
  });
}

// Product Slider
let btnLeft = document.getElementById("slideLeft");
let btnRight = document.getElementById("slideRight");

btnLeft.addEventListener("click", function () {
  document.getElementById("slider").scrollLeft -= 180;
});
btnRight.addEventListener("click", function () {
  document.getElementById("slider").scrollLeft += 180;
});
