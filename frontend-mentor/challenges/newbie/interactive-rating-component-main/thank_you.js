const span = document.getElementById("span");
const back = document.getElementById("btnBack");

const getValue = new URLSearchParams(window.location.search);
let value = getValue.get("value");

span.innerHTML = `You selected ${value}`;
back.addEventListener("click", () => {
  window.location.href = "index.html";
});
