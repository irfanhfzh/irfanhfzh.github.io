const paragItem = document.querySelectorAll(".card__accordion");
const btnItem = document.querySelectorAll(".elementImgAccordion");
const itemInfo = document.querySelectorAll(".card--accordionDesc");
const itemTitle = document.querySelectorAll(".card--accordionTitle");

paragItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    let valor = index;
    let todos = [0, 1, 2, 3, 4];
    todos.forEach((elemento) => {
      if (valor != elemento) {
        btnItem[elemento].classList.remove("rotate");
        itemInfo[elemento].classList.remove("elementDescActive");
        itemTitle[elemento].classList.remove("bolder");
      } else {
        btnItem[valor].classList.add("rotate");
        itemInfo[valor].classList.add("elementDescActive");
        itemTitle[valor].classList.add("bolder");
      }
    });
  });
});
