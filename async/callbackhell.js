function hola(name, Callback){
    setTimeout(function() {
        console.log('hola ' + name);
        Callback()
    },1500)
}

function hablar(callbackHablar){
    setTimeout (function() {
        console.log('bla bla bla bla bla ....');
        callbackHablar();
    }, 1000)
}

function adios (name, otrocallbak){
    setTimeout(function(){
        console.log('adios', name);
        otrocallbak();
    }, 1000);
}

function conversacion(nombre, veces, callback){
    if (veces > 0 ){
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }

}

// --

console.log ('Iniciando proceso')
hola ('calos', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('procesos terinado list');
    })
})



//     hablar(function(){
//         hablar(function(){
//             adios('carlos', function(){
//                 console.log('terminando proceso');
//             });
//         });
        
//     });
    
// });
