let dado = document.getElementById('dado');

function arrojarDado()
{
    //generar número aleatorio entre 0 y 1
    let numeroAleatorio = Math.random();
        console.log( numeroAleatorio );
    //número entre 1 y 6
    let numeroMultiplicado = (numeroAleatorio * 5) + 1;
        console.log( numeroMultiplicado );
    //numero sin decimales
    let numero = Math.round( numeroMultiplicado );
        console.log( numero );
    //cambiamos la cara del dado
    //dado.src = `dados/dado${numero}.png`;
    dado.src = 'dados/dado'+numero+'.png';
}
arrojarDado();
