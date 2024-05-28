/* Ejercicio del boton
//1.variables
let miImput = document.getElementById("boton");

//2. funciones
function cambiarValue (){
    console.log (miImput.value)
    miImput.value = 'Lanzamiento exitoso !!!🚀🚀🚀🚀¡¡¡¡'
}

//3. Eventos
miImput.addEventListener('click', cambiarValue) */

//1.variables
const cajaColor = document.getElementById('caja');
const botonesColores = document.querySelectorAll('.btnColores');

console.log(cajaColor);
console.log(botonesColores);

//2.Funciones
function pintarCaja(e){
    console.log(e.target.getAttribute('data-color'));
    let newColor = e.target.getAttribute('data-color');
    cajaColor.style.backgroundColor = newColor;
}

//3. eventos
botonesColores[0].addEventListener('click', pintarCaja)
botonesColores[1].addEventListener('click', pintarCaja)
botonesColores[2].addEventListener('click', pintarCaja)
botonesColores[3].addEventListener('click', pintarCaja)