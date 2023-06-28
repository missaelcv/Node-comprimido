const express = require ('express');
const { nextTick } = require('vue');
const app = express();
const port = 3000;

//Motor de Plantillass
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render("index", {titulo : "mi titulo Dinamico"})
})

app.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios: "Titulo de Servicio"})
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        descripcion: "Titulo del Sitio Web"
    })
})

app.listen(port, () => {
    console.log('El Servidor a su Servicio en el Puerto', port)
})