const http = require('http')

http.createServer(router).listen(3000);

function router (req, res){
    console.log('nueva petición');
    console.log(req.url);

    switch(req.url){
        case '/hola':
            res.write('hola que tal');
            res.end();
            break;
        default:
            res.write('Error 404, no se que quieres')
            res.end();
    }
    // res.writeHead(201, {'content-Type': 'text/plain'})
    // res.write('hola, se usar http de Node Js')

    // res.end()
}

console.log('escuchando http en el pierto 3000');