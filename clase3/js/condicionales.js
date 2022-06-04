// pedirle al usuario que ingrese un número
let numero = prompt('ingrese un número');

/*
    versión escribiendo elemento img
*/
if( numero < 100 ){
    document.write('<img src="imgs/ok.png">');
}
else{
    document.write('<img src="imgs/error.png">');
}
/*
* versión usando getElementById() cambiando el 'src'
* */
let logo1 = document.getElementById('logo1');
if( numero < 100 ){
    logo1.src = 'imgs/ok.png';
}
else{
    logo1.src = 'imgs/error.png';
}
/*
* versión usando getElementById() cambiando el 'display'
* */
let logo2 = document.getElementById('logo2');
let logo3 = document.getElementById('logo3');
if( numero < 100 ){
    logo2.style.display = 'block';
}
else{
    logo3.style.display = 'block';
}