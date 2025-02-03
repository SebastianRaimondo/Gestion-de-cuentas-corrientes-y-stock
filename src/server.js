require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('../src/routes/index');
const sequelize = require('./config/database');

// Importa las rutas



// Importa los modelos para que se registren y establezcan relaciones
//require('./models/Cliente');
//require('./models/CuentaCorriente');
//require('./models/Remito');
//require('./models/Producto');
//require('./models/Pago');
//require('./models/Movimiento');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

// Sincronizar la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a PostgreSQL establecida correctamente.');
    // Sincronizamos los modelos. (force: false para no borrar datos)
    return sequelize.sync({ force: false });
  })
  .then(() => console.log('Base de datos sincronizada'))
  .catch(error => console.error('Error al conectar o sincronizar la base de datos:', error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

