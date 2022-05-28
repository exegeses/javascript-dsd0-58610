/*  Fórmula */
/*
if( condicion )
    {
        bloque de código si la condición es true;
    }
    else
    {
        bloque de código si la condición es false;
    }
*/
// pedirle al usuario que ingrese un número
let numero = prompt('ingrese un número');

/*
si el número es menor que 100
    que diga "es menor"

si ( en cambio ) el numero no es menor que 100
    que diha "NO es menor"
*/
if( numero < 100 ){
    document.write('es menor');
}
else{
    document.write('NO es menor');
}