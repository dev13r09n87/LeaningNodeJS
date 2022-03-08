const frutas = ['🍓', '🍏', '🍉'];
const precios = [100, 200];
// con esta linea estamos exportando la varible para ser usado en otro archivo js.
module.exports = {
    frutas: frutas, // si la clave es igual al valor se puede omitir el valor a como se muestra precios en caso contrario si es necesario que se cambie.
    precios,
} 