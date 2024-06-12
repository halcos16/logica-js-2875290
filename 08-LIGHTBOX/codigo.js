//1.variables
const btnNumeros = document.querySelectorAll('.min');
const flotante = document.querySelector('#flotante');
const cuadroOpacidad = document.querySelector ('#cuadro');
const equis = document.querySelector ('#equis');
const btnSiguiente = document.querySelector ('#sig');
const btnAntrior = document.querySelector ('#ant');
const imgPrincipal = document.querySelector ('#imgprincipal');

//2.funciones
function lightbox (e){
    //console.log(e.target.src)
    let currentImg = e.target.src;
    flotante.style.top = '0vh';
    flotante.style.transitionDuration = '.5s';
    imgPrincipal.setAttribute('src',currentImg)
}
function cerrar(){
    flotante.style.top = '-100vh';
    flotante.style.transitionDuration = '.5s';
}
function siguiente(){
    imgPrincipal.src='img2.jpg'
}
function anterior(){
    imgPrincipal.src='img1.jpg'
}

//3.eventos
btnNumeros[0].addEventListener('click',lightbox);
btnNumeros[1].addEventListener('click',lightbox);
equis.addEventListener('click',cerrar)
cuadroOpacidad.addEventListener('click',cerrar)
btnAntrior.addEventListener('click', anterior)
btnSiguiente.addEventListener('click', siguiente)