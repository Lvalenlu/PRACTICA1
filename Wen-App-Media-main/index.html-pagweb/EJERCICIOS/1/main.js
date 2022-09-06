/*Realizar un programa que pida al usuario 2 números y se realicen las 4 operaciones básicas (Suma, resta, multiplicación, división). Imprimir los resultados.*/

let num1;
let num2;
num1 = prompt("Introduzca un número");
num2 = prompt("Introduzca un número");
let suma;
let resta;
let multiplicacion;
let division;

suma = parseFloat(num1) + parseFloat(num2);
resta = parseFloat(num1) - parseFloat(num2);
multiplicacion = parseFloat(num1) * parseFloat(num2);
division = parseFloat(num1) / parseFloat(num2);

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);

alert ("El resultado de la suma es: " + suma);
alert ("El resultado de la resta es: " + resta);
alert ("El resultado de la multiplicacion es: " + multiplicacion);
alert ("El resultado de la division es: " + division);
