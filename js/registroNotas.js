document.getElementById("buttomHome").addEventListener("click", function(){
    window.location.href = "./telaInicialProfessor.html"
});
document.getElementById("buttomSair").addEventListener("click", function(){
   window.location.href = "./index.html"
});
document.getElementById("buttomNotas").addEventListener("click", function(){
    window.location.href = "./registroNotas.html"
 });

document.addEventListener("DOMContentLoaded", function () {
    const imgMenu = document.querySelector('.imgMenu');
    const boxMenu = document.querySelector(".boxMenu");

    imgMenu.addEventListener("click", function () {
        this.classList.toggle("imgRotate");
        boxMenu.classList.toggle("boxMenuAnimacao");
    });
}); 

