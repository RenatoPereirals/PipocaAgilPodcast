let btnSenha = document.querySelector("#verSenha");
let btnConfirm = document.querySelector("#verConfSenha");

let form = document.querySelector("#form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
// let date = document.querySelector("#date");
let password = document.querySelector("#password");
let passwordConf = document.querySelector("#passwordconf");


form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
})


function checkInputs() {

  let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let passwordConfValue = passwordConf.value.trim();

  if (usernameValue === '') {
    setError(username, 'Preencha este campo');
  } else {
    setSucess(username)
  }

  if (emailValue === '') {
    setError(email, 'Preencha esse campo')
  } else if (!isEmail(emailValue)) {
    setError(email, 'Email inválido')
  } else {
    setSucess(email)
  }

  if (passwordValue === '') {
    setError(password, 'Preencha esse campo')
  } else if (passwordValue.length < 8) {
    setError(password, 'Senha deve ter mais que 8 caracteres')
  } else {
    setSucess(password)
  }

  if (passwordConfValue === '') {
    setError(passwordConf, 'Preencha esse campo')
  } else if (passwordValue !== passwordConfValue) {
    setError(passwordConf, 'Senhas não tão iguais')
  } else {
    setSucess(passwordConf)
  }
}




function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = 'form-control error';

}

function setSucess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

function isEmail(email){
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}








btnSenha.addEventListener("click", () => {
  let senha = document.querySelector("#password");

  if (senha.getAttribute("type") == "password") {
    senha.setAttribute("type", "text");
  } else {
    senha.setAttribute("type", "password");
  }
});

btnConfirm.addEventListener("click", () => {
  let confirmSenha = document.querySelector("#passwordconf");

  if (confirmSenha.getAttribute("type") == "password") {
    confirmSenha.setAttribute("type", "text");
  } else {
    confirmSenha.setAttribute("type", "password");
  }
});