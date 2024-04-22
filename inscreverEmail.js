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