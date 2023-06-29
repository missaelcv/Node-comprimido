const http = require ('http');
const server = http.createServer((req, res) => {

res.end('Estoy Respondiendo a tu Solicitud V2')

})

const puerto = 3000;
server.listen(puerto, () => {
    console.log('Escuchando Solicitud');
})