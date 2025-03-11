document.getElementById("ir-para-cadastro").addEventListener("click", function(){
    window.location.href = "./cadastro.html"
});

document.getElementById("redefinir-senha").addEventListener("click", function(){
    window.location.href = "./redefinirSenha.html"
});

const handleSubmit = (event) => {
    event.preventDefault(); 
    window.location.href = "./telaInicial.html"
}
document.querySelector('button').addEventListener('click', handleSubmit);