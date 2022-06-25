//ubicamos elementos dentro del DOM
let entrada = document.getElementById('entrada');
let listaCiudades = document.getElementById('listaCiudades');
// array de ciudades
let ciudades = [];
//variable auxiliar
let contenido = '';

function agregarCiudad()
{
    //capturar lo escrito en el input
    let ciudad = entrada.value;
    //agregamos en el array el elemento nuevo
    let cantidad = ciudades.push(ciudad);
    console.log(ciudades);
    console.log(cantidad); //push retorna ciudades.length
    let n = 0;
    while ( n < cantidad )
    {
        contenido = contenido + '<li>'+ ciudad +'</li>';
        n++;
    }
    //imprimimos dentro de la lista
    listaCiudades.innerHTML = contenido;
    //resetar contenido
    contenido = '';
}
