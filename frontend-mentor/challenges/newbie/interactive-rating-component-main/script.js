let form = document.getElementById("formRate");
let input = document.querySelectorAll("input");
let totalInput = input.length;
let submit = document.getElementById("btnSubmit");

input.forEach((item, index) => {
  item.addEventListener("click", function () {
    onClickRate(index);
  });
});

const onClickRate = (index) => {
  input.forEach((item) => item.classList.remove("activeInput"));

  input[index].classList.add("activeInput");
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  input.forEach((element) => {
    if (element.className.includes("activeInput")) {
      window.location.href = `./thank_you.html?value=${element.id} out of ${totalInput}`;
    }
  });
});
