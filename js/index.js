document.getElementById("ir-para-cadastro").addEventListener("click", function(){
    window.location.href = "./cadastro.html"
});

document.getElementById("redefinir-senha").addEventListener("click", function(){
    window.location.href = "./redefinirSenha.html"
});

const script_do_google = 'https://script.google.com/macros/s/AKfycbzFX7joMaZA3oyQkLZr-_IfepxJTjWzXXnEhRaUiQwyfFgUJ0q92itO-TiqWkQGE4WNIQ/exec';
const dados_do_formulário = document.getElementById("acessar");

dados_do_formulário.addEventListener('submit', function (e){
    e.preventDefault();
    fetch(script_do_google, {method: 'POST', body: new FormData(dados_do_formulário) })
    .then(response =>{
        alert('Dados Cadastrados', response);
        dados_do_formulário.reset();
    })
    .catch(error =>

        console.error('Erro ao cadastrar', error));
})