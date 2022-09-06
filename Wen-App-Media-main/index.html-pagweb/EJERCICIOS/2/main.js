let num;
num = prompt("Ingrese un número");
let respuesta;

if (num > 0){
    console.log("El número es positivo");
    respuesta = ("El número es positivo");
}else{
    if(num < 0){
        console.log ("El número es negativo");
        respuesta = ("El número es negativo");
    }
}

alert (respuesta);
