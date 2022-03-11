const { URL } = require("url");

const urlValidar = (req, res, next) => {
    console.log(req.body);
    try {
        // leemos la solicitud
        const { origin } = req.body;
        const urlFrontend = new URL(origin);
        // console.log(urlFrontend);
        if (urlFrontend.origin !== "null") // si el formato de la url es valida. 
        {
            // que continue con lo que se esta proponiendo en este caso seria en agregar o eliminar una url.
            return next();
        }
        else {
            throw new Error(urlFrontend);

        }
    }
    catch (error) {
        return res.send('Url no válida 🙄');
    }

};

module.exports = urlValidar;