document.addEventListener("DOMContentLoaded", function () {
    const imgMenu = document.querySelector('.imgMenu');
    const boxMenu = document.querySelector(".boxMenu");

    imgMenu.addEventListener("click", function () {
        this.classList.toggle("imgRotate");
        boxMenu.classList.toggle("boxMenuAnimacao");
    });
}); 