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
