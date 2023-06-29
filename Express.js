const express = require ('express');
const app = express();

const port = 3000;
app.use(express.static(__dirname + "/public"))

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
})

app.get('/', (req, res) => {
    res.send('Mi Respuesta desde Express');
})

app.get('/Servidor', (req, res) => {
    res.send('Esta es la Pagina Del Servidor')
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(port, () => {
    console.log('El Servidor a su Servicio en el Puerto', port)
})