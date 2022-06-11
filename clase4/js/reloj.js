//mostrar un reloj digital
// con formato  12:37:48

//ubicamos elemento dentro del DOM
let txt = document.getElementById('txt');

//declaramos función de control
function reloj()
{
    //creamos un objeto de fecha
    let fecha = new Date();

    //obtenemos las horas
    let horas = fecha.getHours();
    if ( horas < 10 ){
        horas = "0" + horas;
    }
    //obtenemos los minutos
    let minutos = fecha.getMinutes();
    if ( minutos < 10 ){
        minutos = "0" + minutos;
    }
    //obtenemos los segundos
    let segundos = fecha.getSeconds();
    if ( segundos < 10 ){
        segundos = "0" + segundos;
    }


    //imprimimos en el span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}
//invocamos a la función reloj
reloj();

//actualizamos llamado a la función reloj
setInterval( reloj, 1000 );