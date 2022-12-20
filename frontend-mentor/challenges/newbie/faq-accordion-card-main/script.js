const accordionItem = document.querySelectorAll(".card__accordion");
const btnAccordionItem = document.querySelectorAll(".elementImgAccordion");
const accordionDesc = document.querySelectorAll(".card--accordionDesc");
const accordionTitle = document.querySelectorAll(".card--accordionTitle");

accordionItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    let idx = index;
    let item = [0, 1, 2, 3, 4];

    item.forEach((el) => {
      if (idx != el) {
        btnAccordionItem[el].classList.remove("rotate");
        accordionDesc[el].classList.remove("elementDescActive");
        accordionTitle[el].classList.remove("bolder");
      } else {
        btnAccordionItem[idx].classList.add("rotate");
        accordionDesc[idx].classList.add("elementDescActive");
        accordionTitle[idx].classList.add("bolder");
      }
    });
  });
});
