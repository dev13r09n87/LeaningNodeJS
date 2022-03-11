const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlSchema = new Schema({
    origin: {
        type: String,
        unique: true,
        required: true,
    },
    shortURL: {
        type: String,
        unique: true,
        required: true,
    }
});
// Esta variable se usara para poder acceder al esquema de la base de datos y poder aacceder a sus funciones como find
const Url = mongoose.model('Url', urlSchema)
module.exports = Url; 