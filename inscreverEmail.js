function validarEmail(email) {
  const padraoEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return padraoEmail.test(email);
}


function email1() {
    const email1 = document.getElementById("email1").value.trim();
  
    let dados = JSON.parse(localStorage.getItem("dadosEmail1"));
  
    if (dados == null) {
      localStorage.setItem("dadosEmail1", "[]");
      dados = [];
    }

    if (!validarEmail(email1)) {
      document.getElementById('erroEmail1').innerText = 'Email inválido.';
      return;
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