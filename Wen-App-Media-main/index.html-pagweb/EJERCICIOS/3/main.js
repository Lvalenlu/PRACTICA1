let num;
let respuesta;
num = prompt ("Ingrese un numero");

if (num % 2 == 0){
    console.log("El número es par");
    respuesta = ("El número es par");
}else{
    if(num % 2 != 0){
        console.log("El número es impar");
        respuesta("El número es impar");
    }
}

alert(respuesta);