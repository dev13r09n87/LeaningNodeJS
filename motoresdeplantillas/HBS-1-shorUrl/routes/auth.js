const express = require('express');
const router = express.Router();

// configurarndo las rutas

router.get("/login", (req, res) => {
    res.render("login");
});

module.exports = router;