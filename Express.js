const express = require ('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Mi Respuesta desde Express');
})

app.listen(port, () => {
    console.log('El Servidor a su Servicio en el Puerto', port)
})