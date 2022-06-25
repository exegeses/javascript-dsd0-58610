let n = 0;//inicio o lanzamiento
while ( n < 15 )
{ //condicion o límite
    document.write( n + '<br>');
    n++; // incremento
}

document.write('<hr>');
let semana = [
    'Domingo', 'Lunes', 'Martes',
    'Miércoles', 'Jueves', 'Viernes',
    'Sábado'
];

let i = 0;
let cantidad = semana.length;
document.write('<ul>');
while ( i < cantidad ) {
    document.write( '<li>' + semana[i] + '</li>');
    i++;
}
document.write('</ul>');