const express = require("express");
const router = express.Router();
const sequelize = require('../config/database');

// Ruta de prueba
router.get("/", (req, res) => {
    res.json({ message: "API funcionando 🚀" });
});


// Ruta PUT para crear las tablas
router.put('/crear-tablas', (req, res) => {
    sequelize.sync({ force: true })  // Crea las tablas, borrando las existentes
      .then(() => {
        res.status(200).send('Tablas creadas correctamente');
      })
      .catch(err => {
        console.error('Error al crear las tablas:', err);
        res.status(500).send('Error al crear las tablas');
      });
  });

module.exports = router;
