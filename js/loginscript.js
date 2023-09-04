const openerro = document.querySelector("#teste");
// const closerro;
const irhome = document.querySelector("#irhome");
const modal = document.querySelector("#popuperro");
const fade = document.querySelector("#fade");


const togleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openerro, , fade].forEach((el) => {
  el.addEventListener("click", () => togleModal());
});

function home() {
  window.location.href = "../index.html";
}