/*
let dato = Number( prompt('ingrese un número') );
let dato2 = Number( prompt('ingrese otro número') );
let resultado = dato + dato2;
document.write(resultado);
*/

/*Number()
parseInt()
parseFloat()*/

let dato3 = Number( prompt('ingrese un número') );

if( isNaN( dato3 ) ){
    document.write('el primer dato debe ser un número');
}
else{
    let dato4 = Number( prompt('ingrese otro número') );
    if( isNaN( dato4 ) ){
        document.write('el segundo dato debe ser un número');
    }
    else{
        let resultado = dato3 + dato4;
        document.write(resultado);
    }
}


