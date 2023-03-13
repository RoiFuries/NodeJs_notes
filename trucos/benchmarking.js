console.time('todo')
let suma = 0;
console.time('bucle');

for ( let i = 0; i < 1000000; i ++ ){
    suma += 1;
}

console.timeEnd('bucle')
console.log('hola');

let suma2 = 0;
console.time('bucle2');

for ( let j = 0; j < 1000000; j ++ ){
    suma2 += 1;
}

console.timeEnd('bucle2')

console.log('asin empieza');
console.time('asinc')
asinc()
.then(()=>{
    console.timeEnd('asinc')
})
console.log('hola');

function asinc () {
    return new Promise( (resolve) => {
        setTimeout(function(){
            console.log('termina lo asin');
            resolve()
        })
    })
    
}



console.timeEnd('todo')
