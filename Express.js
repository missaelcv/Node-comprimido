const express = require ('express');
const app = express();

const port = 3000;
app.use(express.static(__dirname + "/public"))

//Motor de Plantillass
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get('/', (req, res) => {
    res.render("index", {titulo : "mi titulo Dinamico"})
})

app.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios: "Titulo de Servicio"})
})

app.use((req, res, next) => {
    res.status(404).render("404", { titulo: "Página 404" });

app.listen(port, () => {
    console.log('El Servidor a su Servicio en el Puerto', port)
})