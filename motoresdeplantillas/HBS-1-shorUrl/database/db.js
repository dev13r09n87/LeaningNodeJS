const mongoose = require('mongoose');
mongoose.connect(process.env.URI)
    .then(() => console.log('conectada  a la BD 🔥'))
    .catch((e) => console.log(" Fallo la conexión con mongoose => " + e));