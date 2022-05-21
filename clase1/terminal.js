
let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa tu nombre ', function ( nombre )
{
    console.log( 'Tu nombre es: ', nombre );
    rl.close();
});