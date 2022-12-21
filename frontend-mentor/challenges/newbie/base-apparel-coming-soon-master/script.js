const form = document.getElementById("input__form");
const inputEmail = document.getElementById("input__email");
const inputTextError = document.getElementById("input__validation");
const iconError = document.getElementById("input__iconError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputEmail.value === "") {
    inputTextError.innerHTML = "This field is required";
    iconError.classList.add("icon__error-show");
    inputEmail.focus();
  } else if (inputEmail.value.indexOf("@") < 0) {
    inputTextError.innerHTML = "Please provide a valid email";
    inputEmail.focus();
  } else if (inputEmail.value.indexOf(".com") < 0) {
    inputTextError.innerHTML = "Please provide a valid email";
    inputEmail.focus();
  } else {
    iconError.classList.remove("icon__error-show");
    inputTextError.classList.add("success__msg");
    inputEmail.classList.add("success__msg");
    inputEmail.value = "";
    inputTextError.innerHTML = "Email registered correctly";

    setTimeout(() => {
      inputEmail.value = "";
      window.location.reload();
    }, 2000);
  }
});
