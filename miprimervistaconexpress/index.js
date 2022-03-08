/* creacion de un servidor sin express
// const http = require('http');
// const port = 5000;
// const server = http.createServer((req, res) => {
//     res.end('Esta es la respuesta 👌')
// })
// server.listen(port, () => console.log("Funcionando 🚀"));
*/

// usando express. Siempre es importante visitar la pagina oficial.
const fileSystem = require('fs');
const express = require('express');
const { send } = require('process');
const app = express();
const port = 5000;

//middleware
// ?  cuando veamos "app.use" en express va hacer un middleware:
//? es algo que insertecta algo antes de enviar una respuesta. primero verificamos algo y despues le enviamos las repuesta al cliente.

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/formulario', (req, res) => {
    // leer lo que se escribio en el frontend por medio del metodo get, se captura lo que escribio el usuario
    // verbo -> GET: Agrega datos de formulario a la URL en pares de Nombre=Valor, la longitud de la url es limitada a 3000 Caracteres
    //! Está destinado a enviar pequeñas cantidades de información al servidor através de la URL. 
    console.log(req.query);
    res.send('formulario enviado .... ' + req.query.nombre);
});

app.post('/formulario', (req, res) => {
    // verbo -> POST: Desde el formulario HTML se está enviando datos a travéz del cuerpo o body. pero por defecto express no lee ese tipo de datos. La ventaja de este verbo es que la informacion ingresada en el formulario no se le muestra el cliente.

    //! Se necesita un middleware apropiado para dicho trabajo.(algo que interceptaba algo antes de la respuesta). el middleware leerá el cuerpo de la solicitud , lo analizará y colocará los resultados analizados en <req.body>. Para que esté allí cuando se llame a su controlador de solicitud.  

    const { nombre, apellido } = req.body;
    console.log("Una vez configurado app.use(express.urlencoded({ extended: true }));  ->  ", req.body);
    if (!nombre || !apellido) return res.redirect("/error.html")
    // res.send('Favor ingrese información valida'); // ! con el return se sale inmediatamente y no continua con las demas lineas de codigo
    //Creación del archivo con los datos del formulario.
    fileSystem.writeFile(`archivos/${nombre}.txt`, nombre + ' ' + apellido, (err) => {
        if (err) return res.send('Fallo al crear el archivo');
        //res.send("Se creo el archivo"); // en lugar de moostrar esta respuesta

        // vamos a descargar el archivo al pc.
        res.download(__dirname + `/archivos/${nombre}.txt`); //! recibe la carpeta o ruta absoluta en este caso se usa el __dirname en donde estamos trabajando y le concatenamos el nombre del archivo.

    });

    // res.send('formulario enviado .... ' + req.body.nombre);
});

app.get('/', (req, res) => {
    res.send('Visitastes la pagina de inicio');
});

//! get viaja por el url
app.get('/bluuweb', (req, res) => {
    res.send("Visitastes a bluuweb");
});

// todo probar esto y comentar el metodo get para verificar que no se logra visualizar
app.post('/bluuweb', (req, res) => {
    res.send("Visitastes a bluuweb del post");
});

app.listen(port, () => console.log('Funcionando el servidor 🚀🚀🚀🚀'))