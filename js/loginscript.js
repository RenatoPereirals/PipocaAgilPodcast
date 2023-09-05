let btnSenha = document.querySelector("#verSenhaLogin");

btnSenha.addEventListener("click", () => {
  let senha = document.querySelector("#passwordLogin");
  if (senha.getAttribute("type") == "password") {
    senha.setAttribute("type", "text");
  } else {
    senha.setAttribute("type", "password");
  }
});




function home() {
  window.location.href = "../index.html";
}