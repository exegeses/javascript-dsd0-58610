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
    //obtenemos los minutos
    let minutos = fecha.getMinutes();
    //obtenemos los segundos
    let segundos = fecha.getSeconds();


    //imprimimos en el span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}
//invocamos a la función reloj
reloj();

//actualizamos llamado a la función reloj
setInterval( reloj, 1000 );