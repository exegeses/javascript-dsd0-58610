//ubicamos elemento dentro del DOM
let spanTxt = document.getElementById('txt');

/*mostrar la fecha actual
    formato 04/06/2022
**/

// creamos un objeto de fecha y lo almacenamos en una variable
let fecha = new Date();

//obtenemos el número del día del mes | de 1 a 31
let diaMes = fecha.getDate();
if ( diaMes < 10 ){
    diaMes = '0' + diaMes;
}

//obtenemos el número del mes | de 0 a 11
let mes = fecha.getMonth() + 1;
if ( mes < 10 ){
    mes = '0' + mes;
}

//obtenemos el número del anio
let anio = fecha.getFullYear();

// imprimimos dato en el span
//spanTxt.innerText = `${diaMes}/${mes}/${anio}`; //backtick
spanTxt.innerText = diaMes +'/'+ mes +'/'+ anio;
