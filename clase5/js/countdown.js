let txtDias = document.getElementById('txtDias');
let txtHoras = document.getElementById('txtHoras');
let txtMinutos = document.getElementById('txtMinutos');
let txtSegundos = document.getElementById('txtSegundos');

function contdown()
{
    let ahora = new Date();
    let final = new Date(2022, 11, 21);
    //conversión a formato timestamp
    //tiempo en milisegundos desde el 1º de enero de 1970
    let actual = ahora.getTime();
    let evento = final.getTime();
    //diferencia entre fechas
    let diferencia = evento - actual;

    //obtenemos el tiempo en segundos, minutos, horas y dias
    let segundos = Math.trunc( diferencia/1000 );
    let minutos = Math.trunc( segundos/60 );
    let horas = Math.trunc( minutos/60 );
    let dias = Math.trunc( horas/24 );

    //obtenemos los sobrantes(modulo) de horas, minutos y segundos
    horas = horas%24;
    minutos = minutos%60;
    segundos = segundos%60;

    //agregamos dos dígitos cuando haga falta
    horas = dosDigitos(horas);
    minutos = dosDigitos(minutos);
    segundos = dosDigitos(segundos);

    //imprimimos en el HTML
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

function dosDigitos( cifra )
{
    if ( cifra < 10 ){
        cifra = '0' + cifra;
    }
    return cifra;
}
contdown();
setInterval( contdown );