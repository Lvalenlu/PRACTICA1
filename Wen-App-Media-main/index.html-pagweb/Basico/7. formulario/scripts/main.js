'use strict';
//crear contenedores
/*
1. var = global
2. let = local - variables
3. const = constantes
*/

const btnValidar= document.getElementById('validar');
//console.log(btnvalidar);
//Al addEventListener debo pasar dos párametros
btnValidar.addEventListener('click', function(e) {
    e.preventDefault();
    let form = document.getElementById('dataform');
    console.log(form[1].value);
    console.log(form[2].value);
    console.log(form[3].value);
    console.log(form[4].value);
    console.log(form[5].value);
    console.log(form[6].value);
    console.log(form[7].value);
    console.log(form[8].value);
    console.log(form[9].value);
    console.log(form[10].value);
    console.log(form[11].value);
    console.log(form[12].value);
    console.log(form[13].value);
    console.log(form[14].value);
});