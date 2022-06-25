let marcas = [
                'Boss', 'Hermes', 'Zara',
                'Aeropostale', 'Tommy', 'Hollister'
             ];
console.log( marcas );

let txt = document.getElementById('txt');
    txt.innerText = marcas;
let txt2 = document.getElementById('txt2');
    txt2.innerText = marcas[2];

let semana = [
                'Domingo', 'Lunes', 'Martes',
                'Miércoles', 'Jueves', 'Viernes',
                'Sábado'
             ];
let fecha = new Date();
let nDiaSemana = fecha.getDay();
    console.log(nDiaSemana)
let txt3 = document.getElementById('txt3');
    txt3.innerText = semana[ nDiaSemana ];