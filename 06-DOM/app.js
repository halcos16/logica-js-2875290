/* const pantalla = document.getElementById('titulo');
const mibtn = document.getElementById('btn');
 

//crear el evento
mibtn.addEventListener('click', function(){
    pantalla.style.color = 'blueviolet';//cambiar el color
    pantalla.innerText = "ejecutando script  🏍🏍🏍🏍🏍🏍";//cambia el texto dentro d
    mibtn.style.fontSize = 'cursive';
    mibtn.style.backgroundColor = 'pink'
}) */

//contador

//contador
//1. captura de variables
const numero = document.getElementById('pantalla');
const mas = document.getElementById('mas');
const menos = document.getElementById('menos');
let i = 0;
//2. Creación de funciones
function incrementar() {
    if (i < 20) {
        i++;
        numero.innerText = i;
    }
}
function decrementar() {
    if (i > 0) {
        i--;
        numero.innerText = i;
    }
}
//3. Llamado y eventos
mas.addEventListener('click', incrementar);
menos.addEventListener('click', decrementar);