let btnSenha = document.querySelector("#verSenha");
let btnConfirm = document.querySelector("#verConfSenha");
let meuForm = document.querySelector("#cadastro");
let nome = document.querySelector("#nome");
let msgErroNome = document.querySelector("#msgerronome");

nome.addEventListener("keyup", () => {
  if ( nome.value.lenght <= 2 ){
   nome.setAttribute("style", 'background-color: red')
   nome.setAttribute('style', 'boder-color: red')
  } else {
    msgErroNome.setAttribute("style", "display: none");
  }
});

function msgErroLabel() {
    
  msgErroNome.style.display = "block";
}
function cadastrar() {}

btnSenha.addEventListener("click", () => {
  let senha = document.querySelector("#senha");

  if (senha.getAttribute("type") == "password") {
    senha.setAttribute("type", "text");
  } else {
    senha.setAttribute("type", "password");
  }
});

btnConfirm.addEventListener("click", () => {
  let confirmSenha = document.querySelector("#confirmasenha");

  if (confirmSenha.getAttribute("type") == "password") {
    confirmSenha.setAttribute("type", "text");
  } else {
    confirmSenha.setAttribute("type", "password");
  }
});
