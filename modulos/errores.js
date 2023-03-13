function otraFn(){
    seRompe();
}



function seRompe (){
    return 3 + z
}

function seRompeAsync(cb){
    setTimeout(function(){
        try {
            return 3 + x;

        }catch(err){
            console.error('error en la funcion async');
            cb(err)
        }
    })
}
try{
    seRompeAsync(function(err){
        console.log(err.message);
    })
    //seRompe()
} catch(kaka){
    
    console.error('vaya se rompio, la concha de la lora');
    console.error(kaka.message);
}
console.log('final');