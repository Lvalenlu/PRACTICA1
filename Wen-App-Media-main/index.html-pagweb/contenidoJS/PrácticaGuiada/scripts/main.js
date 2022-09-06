//Regex 101



import{validatedString, validatedAverage} from "./validate.js";

let btnAgregar = document.querySelector("#btn");
const btnMostrar = document.querySelector("#btnMostrar");

//btnAgregar


btnAgregar.addEventListener("click", ()=>{
    
const nombre = document.querySelector("#nombre").value;
const apellido = document.querySelector("#apellido").value;
const promedio = document.querySelector("#promedio").value;
const opcion = document.querySelector("#opcion").value;


if (validatedString(nombre) && validatedString(apellido) && opcion != "0"){
    if (!isNaN(parseFloat(promedio)) && (validatedAverage(promedio))){
        console.log("validado");
        agregarEstudiante(nombre, apellido, promedio);
    }else{
        console.log("Error promedio");
    }
}else{  
    console.log("Error datos");
}
});

