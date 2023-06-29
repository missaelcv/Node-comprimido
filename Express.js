const express = require ('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Mi Respuesta desde Express');
})

app.get('/Servidor', (req, res) => {
    res.send('Esta es la Pagina Del Servidor')
})

app.listen(port, () => {
    console.log('El Servidor a su Servicio en el Puerto', port)
})