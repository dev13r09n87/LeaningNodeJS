// En esta linea estamos importando el archivo frutas no es necesario el agregar el .js .
// el node packmanagement que utilizaremos en nuestro proyecto.
const { frutas, precios } = require("./frutas")
console.log("Hola desde app.js");
frutas.forEach((item) => console.log(item));
console.log(precios);