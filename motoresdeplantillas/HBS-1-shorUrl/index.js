const express = require("express");
const { create } = require("express-handlebars");
require('dotenv').config();
require('./database/db');
const app = express();

console.log("Hola soy el Backend");

// configuracion  hbs
// recibe las configuraciones de express handlebar pero le decimos que la extencion es hbs
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],

});

app.engine(".hbs", hbs.engine); // le decimos cual es la extencion de plantilla 
app.set("view engine", ".hbs"); // la extencion va ser hbs
app.set("views", "./views");  // va estar dentro de la carpeta views.

//Middleware
app.use(express.urlencoded({ extended: true }));

app.use("/", require('./routes/home'));
app.use("/auth", require('./routes/auth'));

app.use(express.static(__dirname + "/public"));


// llamando a una variable de entorno.
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => { console.log("Servidor corriendo 🚀🚀 " + PORT) }); 