// aca vamos a tener la logica de crear eliminar actualizar en la base de datos
const Url = require('../models/Url');
const { nanoid } = require('nanoid');
// configurarndo las rutas

// aca esperaremos al modelo que resuelva la pericion de la prmesa . Esto nos traera un objeto de mongoose con super poderes que podemos hacer mas cosas pero por el momento lo dejamos asi ,   un array pero le tenemos que decir que nos pase un objero de java script a la vista. con la funcion "lean()" logramos hacer eso.
const leerUrls = async (req, res) => {

    try {
        const urls = await (Url.find().lean());
        console.log(urls);
        res.render("home", { urls: urls })
    } catch (error) {
        console.log(error);
        res.send('Fallo algo ....');
    }
};

const agregarUrl = async (req, res) => {
    // console.log(req.body);
    const { origin } = req.body;
    try {
        const url = new Url({ origin: origin, shortURL: nanoid(8) })
        console.log(url);
        await url.save();
        // res.send('Agregado');
        res.redirect('/'); // lo redireccionamos al home
    } catch (error) {
        console.log(error);
        res.send('Error algo fallo');
    }
}

const eliminarUrl = async (req, res) => {
    const { id } = req.params;
    try {
        await Url.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.send("error algo fallo");
    }
}

const editarForm = async (req, res) => {
    try {
        // consultar la base de datos.
        const { id } = req.params;
        const url = await Url.findById(id).lean();
        console.log("probando editar", url);
        res.render("home", { url });
    } catch (error) {
        console.log(error);
        res.send("Error algo falló 😮");
    }
};

const editarUrl = async (req, res) => {
    const { id } = req.params;
    const { origin } = req.body;
    try {
        // consultar la base de datos.
        await Url.findByIdAndUpdate(id, { origin: origin });
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.send("Error algo falló 😮");
    }

};

const redireccionamiento = async (req, res) => {
    const { shortUrl } = req.params;
    try {
        const urlDB = await Url.findOne({ shortURL: shortUrl });
        console.log(urlDB);
        res.redirect(urlDB.origin);
    } catch (error) {

    }
};

module.exports = {
    leerUrls,
    agregarUrl,
    eliminarUrl,
    editarForm,
    editarUrl,
    redireccionamiento,
};