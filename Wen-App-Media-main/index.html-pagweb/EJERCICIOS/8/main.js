let num1;
let num2;
let num3;
let resultado;
resultado = "";

num1 = prompt("Ingrese un número entre 100 y 200");
num2 = prompt("Ingrese otro número entre 100 y 200");
num3 = prompt("Ingrese otro número entre 100 y 200");


num1 = parseFloat(num1) % 2;
num2 = parseFloat(num2) % 2;
num3 = parseFloat(num3) % 2;

console.log(num1);
console.log(num2);
console.log(num3);

if(num1 > 100 && num1 < 200 && num2 > 100 && num2 < 200 && num3 > 100 && num3 < 200){
    switch (num1, num2, num3){
        case (num1 == 0):
            alert(num1, "es par");
        case (num2 == 0):
            alert(num2, "es par");
        case (num2 == 0):
            alert(num3, "es par");
        default:
            alert("Ningún número es par");
    }
}
