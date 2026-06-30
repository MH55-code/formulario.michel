// Alternância de tema
document.getElementById("toggleTheme").addEventListener("click", function(){
  document.body.classList.toggle("light-theme");
});

// Validação do formulário
const form = document.getElementById("contatoForm");
if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){
      alert("Preencha todos os campos!");
      return;
    }

    let regexEmail = /\S+@\S+\.\S+/;
    if(!regexEmail.test(email)){
      alert("Digite um e-mail válido!");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
  });
}
