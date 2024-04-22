function newsletter() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const emailForm = document.getElementById("emailForm");
  const message = document.getElementById("message");

  let dados = JSON.parse(localStorage.getItem("dadosForm"));

  if (dados == null) {
    localStorage.setItem("dadosForm", "[]");
    dados = [];
  }

  let auxRegistro = {
    firstName: firstName.value,
    lastName: lastName.value,
    emailForm: emailForm.value,
    message: message.value
  }

  dados.push(auxRegistro);
  console.log(auxRegistro);

  localStorage.setItem("dadosForm", JSON.stringify(dados));
  alert("Registro incluido com sucesso!")

  firstName.value = "";
  lastName.value = "";
  emailForm.value = "";
  message.value = "";
}

function email1() {
  const email1 = document.getElementById("email1");

  let dados = JSON.parse(localStorage.getItem("dadosEmail1"));

  if (dados == null) {
    localStorage.setItem("dadosEmail1", "[]");
    dados = [];
  }

  let auxRegistro = {
    email1: email1.value
  }

  dados.push(auxRegistro);
  console.log(auxRegistro);

  localStorage.setItem("dadosEmail1", JSON.stringify(dados));
  alert("Registro incluido com sucesso!")

  email1.value = "";
}

function email2() {
  const email2 = document.getElementById("email2");

  let dados = JSON.parse(localStorage.getItem("dadosEmail2"));

  if (dados == null) {
    localStorage.setItem("dadosEmail2", "[]");
    dados = [];
  }

  let auxRegistro = {
    email2: email2.value
  }

  dados.push(auxRegistro);
  console.log(auxRegistro);

  localStorage.setItem("dadosEmail2", JSON.stringify(dados));
  alert("Registro incluido com sucesso!")

  email2.value = "";
}

function validarFirstName(firstName) {
  const padraoNome = /^[a-zA-Z\s]*$/;
  return padraoNome.test(firstName);
}

function validarLastName(lastName) {
  const padraoSobrenome = /^[a-zA-Z\s]*$/;
  return padraoSobrenome.test(lastName);
}

function validarEmail(email) {
  const padraoEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return padraoEmail.test(email);
}

function validarMessage(message) {
  return message.trim().length >= 10;
}


document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    validarFormulario();
  });

function validarFormulario() {
  const firstNameInput = document.getElementById('firstName').value.trim();
  const lastNameInput = document.getElementById('lastName').value.trim();
  const emailInput = document.getElementById('emailForm').value.trim();
  const messageInput = document.getElementById('message').value.trim();

  if (firstNameInput === '') {
    document.getElementById('erroFirstName').innerText = 'Por favor, preencha o campo.';
    return;
  } else if (!validarFirstName(firstNameInput)) {
    document.getElementById('erroFirstName').innerText = 'Nome inválido';
    return;
  } else {
    document.getElementById('erroFirstName').innerText = '';
  }
  if (lastNameInput === '') {
    document.getElementById('erroLastName').innerText = 'Por favor, preencha o campo.';
    return;
  } else if (!validarLastName(lastNameInput)) {
    document.getElementById('erroLastName').innerText = 'Sobrenome inválido.';
    return;
  } else {
    document.getElementById('erroLastName').innerText = '';
  }
  if (emailInput === '') {
    document.getElementById('erroEmail').innerText = 'Por favor, preencha o campo.';
    return;
  } else if (!validarEmail(emailInput)) {
    document.getElementById('erroEmail').innerText = 'Email inválido.';
    return;
  } else {
    document.getElementById('erroEmail').innerText = '';
  }
  if (messageInput === '') {
    document.getElementById('erroMessage').innerText = 'Por favor, preencha o campo.';
    return;
  } else if (!validarMessage(messageInput)) {
    document.getElementById('erroMessage').innerText = 'Mensagem inválida. Escreva pelo menos uma frase com 10 caracteres.';
    return;
  } else {
    document.getElementById('erroMessage').innerText = '';
  }

  newsletter();
}
});





