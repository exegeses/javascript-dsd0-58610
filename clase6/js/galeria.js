let galeria = document.getElementById('galeria')
let fotos = [
    'anto', 'bruno', 'dani', 'gery',
    'killq', 'lu', 'maiten', 'maqui',
    'marce', 'marco', 'marco2','solsteiz'
]
let cantidad = fotos.length;

//variable auxiliar
let contenido = '';
let n = 0;
while( n < cantidad )
{
    contenido = contenido + '<img src="fotos/'+ fotos[n] +'.png">';
    n++;
}

galeria.innerHTML = contenido;