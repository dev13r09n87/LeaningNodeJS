const express = require('express');
const router = express.Router();

// configurarndo las rutas

router.get("/", (req, res) => {
    // simulacion de los datos de la base de datos
    const urls = [
        { origen: "www.google.com.ni/bluuweb1", shorURL: "dafds1" },
        { origen: "www.google.com.ni/bluuweb2", shorURL: "dafds2" },
        { origen: "www.google.com.ni/bluuweb3", shorURL: "dafds3" },
        { origen: "www.google.com.ni/bluuweb4", shorURL: "dafds3" },
    ];
    res.render("home", { urls: urls });
});
module.exports = router;