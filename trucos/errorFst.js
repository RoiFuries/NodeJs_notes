function asincrona (callback) {
    setTimeout( function(){
        try{
            let a = 3 + z
            callback(null, a)
        } catch (e) {
            callback(e, null)
        }
    }, 1000)

    
}

asincrona(function(err, dato){
    if(err){
        console.log('hay error nigga');
        console.error(err);
        return false
                // throw err

    }
    console.log(' todo bien mi data es: ', dato);
})