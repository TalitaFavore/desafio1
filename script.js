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
