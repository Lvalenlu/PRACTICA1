let num1;
let num2;
let num3;
let respuesta;

num1 = prompt("Ingrese un número");
num2 = prompt("Ingrese otro número");
num3 = prompt("Ingrese otro número");

if (num1 > num2 && num1 > num3){
    console.log("El primer número es mayor");
    respuesta = ("El primer número es mayor");
}else{
    if(num2 > num1 && num2 > num3){
        console.log("El segundo número es mayor");
        respuesta = ("El segundo número es mayor"); 
    }else{
        if(num3 > num1 && num3 > num2){
            console.log("El tercer número es mayor");
            respuesta = ("El tercer número es mayor"); 
        }
    }   
}
alert(respuesta)
