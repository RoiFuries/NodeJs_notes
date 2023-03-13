// const process= require('process')

process.on('beforeExit', () => {
    console.log('Ale el proceso va ha terminar');
});

process.on('exit', () => {
    console.log('Ale el proceso termino');
    setTimeout( () => {
        console.log('nunca saldra');
    },0)
});

process.on('uncaughtException', (err,origigeb) => {
    console.error('se nos olvido capturar un error');
    console.error(err);

});

// funcionquenoexiste()

console.log('esto si el error no se recoje, no sale');


// process.on ('uncaughtRejection')