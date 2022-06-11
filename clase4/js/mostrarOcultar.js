let caja = document.getElementById('caja');

//declaramos función/es de control
function ocultar()
{
    caja.style.display = 'none';
}
function mostrar()
{
    caja.style.display = 'block';
}

function interruptor()
{
    if( caja.style.display == 'block' ){
        //caja.style.display = 'none';
        ocultar();
    }else{
        //caja.style.display = 'block';
        mostrar();
    }
}