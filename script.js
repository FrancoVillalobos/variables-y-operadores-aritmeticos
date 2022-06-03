/* Realizar operaciones con dos números. */

let numero1 = +prompt("Ingresa numero 1 > 0:");
let numero2 = +prompt("Ingresa numero 2 > 0:");

// calculos
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let division = numero1 / numero2;
let multiplicacion = numero1 * numero2;
let modulo = numero1 % numero2;

// respuestas
console.log("Suma:", suma);
document.write("<br>Suma: ",numero1," + ",numero2," = ", suma, "<br>");

console.log("Resta:", resta);
document.write("Resta: ",numero1," - ",numero2," = ", resta, "<br>");

console.log("Division:", division);
document.write("División: ",numero1," / ",numero2," = ", division, "<br>");

console.log("Multiplicacion: ", multiplicacion);
document.write("Multiplicacion: ",numero1," / ",numero2," = ", multiplicacion, "<br>");

console.log("Modulo:", modulo);
document.write("Modulo: ",numero1," % ",numero2," = ", modulo, "<br>");

/* Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
que la transforme a grados Kelvin y Fahrenheit. */

let grados = +prompt("Ingresa temperatura en °C");
document.write("Temperatura en grados centigrados: ",grados, "<br>");

let kelvin = grados + 273.15;
console.log("La temperatura en ° Kelvin:", kelvin);
document.write("Temperatura en Kelvin: ",kelvin, "<br>");

let gradosF = grados * (9 / 5) + 32;
console.log("La temperatura en ° Fahrenheit:", gradosF);
document.write("Temperatura en ° Fahrenheit: ",gradosF, "<br>");

/* Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. */

let dias = +prompt("Ingrese numero de dias a transformar");
// calculo
let anos = Math.floor(dias / 365);
let resto = dias % 365;
let semanas = Math.floor(resto / 7);
let sobra = resto % 7;
// respuesta
console.log(
  "Los dias son equivalentes a:",
  anos, "años",
  semanas, "semanas",
  sobra, "dias"
);
document.write(
    "<br>", dias," dias son equivalentes a: ",
    anos, " años ",
    semanas, " semanas ",
    sobra, " días.", "<br>");

/*     Crear un programa que solicite al usuario 5 números y realice los cálculos que se
    piden a continuación. 
    ● La suma de todos los números.
    ● El promedio de los 5 números ingresados.*/
let num1 = +prompt("Ingrese numero 1 de 5");
let num2 = +prompt("Ingrese numero 2 de 5");
let num3 = +prompt("Ingrese numero 3 de 5");
let num4 = +prompt("Ingrese numero 4 de 5");
let num5 = +prompt("Ingrese numero 5 de 5");

//calculo
let suma5 = num1 + num2 + num3 + num4 + num5;
let prome5 = suma5 / 5;
//respuesta
console.log(num1, " + ", num2, " + ", num3, " + ", num4, " + ", num5, " = ", suma5);
document.write("<br>",num1, " + ", num2, " + ", num3, " + ", num4, " + ", num5, " = ", suma5, "<br>");
console.log(suma5, " / 5 = ", prome5);
document.write(suma5, " / 5 = ", prome5, "<br>");