/* console.log('ejecutando') */

//Punto 1 del taller

/* let altura = prompt ('Ingrese su estatura').toLowerCase()

if (altura <= 150){
    console.log ('Persona de Altura Baja');
}else if (altura >= 151 && altura <= 170){
    console.log ('Persona de Altura Media');
}else if (altura > 171){
    console.log ('Persona Alta');
} */

//Punto 2 taller

/* let matematica = prompt ('Introduzca la nota de Matematicas');
let español = prompt ('Introduzca la nota de Español');
let sociales = prompt ('Introduzaca la nota de Sociales');
let promedio = (parseInt (matematica) + parseInt (español) + parseInt (sociales) )/3;

if (promedio === 10){
    console.log ('Excelente');
}else if (promedio >7 && promedio <=9){
    console.log ('Bueno');
}else if (promedio <7){
    console.log ('Insuficiente')
} */

//Punto 3 taller

/* let estatura = prompt ('Ingrese su Estatura');
let velocidad = prompt ('Ingrese su Velocidad');
let edad = prompt ('Ingrese su Edad');

if (estatura >= 180 && velocidad >= 10 && edad >= 18){
    console.log ('Pasara al equipo profesional de mayores');
}else if (estatura >= 180 && velocidad >= 10 && edad <= 17){
    console.log ('Pasara a las divisiones menores');
}else if (estatura < 180 || velocidad < 10 || edad <= 18 || edad >= 18){
    console.log ('No puedes ingresar')
} */

//Punto 4 taller

/* let cantidad, precio, compra, descuento1, descuento2, descuento3, pagar1, pagar2, pagar3;

precio = 100000;
cantidad = prompt ('Ingrese la cantidad de escritorios');
compra = precio*cantidad;
descuento1 = compra*(10/100);
descuento2 = compra*(20/100);
descuento3 = compra*(40/100);
pagar1 = (parseFloat (compra-descuento1));
pagar2 = (parseFloat (compra-descuento2));
pagar3 = (parseFloat (compra-descuento3));
if (cantidad >=1 && cantidad <=4){
    console.log ('El descuento es: '+descuento1);
    console.log ('El total a pagar es: '+pagar1)
}else if (cantidad >=5 && cantidad <=9){
    console.log ('El descuento es: '+descuento2);
    console.log ('El total a pagar es: '+pagar2);
}else if (cantidad >= 10){
    console.log ('El descuento es: '+descuento3);
    console.log ('El total a pagar es: '+pagar3);
} */

//Punto 5 taller

/* alert("Listado de frutas:\n- Manzana\n- Plátano\n- Naranja\n- Fresa\n- Piña");
let frutaescogida = prompt("Ingresar la fruta que prefieres").toLowerCase();
let cantidad = prompt("Ingresa la cantidad");
let valores = {
    "mango": 1000,
    "manzana": 1100,
    "pera": 1200,
    "melon": 1300,
    "piña": 1500,
};
let valorporunidad = valores[frutaelegida];
let total = valorporunidad * cantidad;
alert("Fruta: " + frutaelegida + "\nValor por unidad: $" + parseFloat(valorporunidad) + "\nValor total: $" + parseFloat(total)); */