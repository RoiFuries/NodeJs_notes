function hola(name, Callback){
    setTimeout(function() {
        console.log('hola ' + name);
        Callback()
    },1500)
}

function adios (name, otrocallbak){
    setTimeout(function(){
        console.log('adios', name);
        otrocallbak();
    }, 1000);
}

console.log ('iniciando proceso')
hola('carlos', function (){
    adios('carlos', function(){
        console.log('terminando proceso');
    })
})

// hola('carlos ', function(){})
// adios('carlos ', function(){})