// src/config/database.js
const { Sequelize } = require('sequelize');
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

const sequelize = new Sequelize(
  process.env.DB_NAME,     // Nombre de la base de datos
  process.env.DB_USER,     // Usuario
  process.env.DB_PASSWORD, // Contraseña
  {
    host: process.env.DB_HOST, // Por ejemplo: 'localhost'
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432, // Puerto, 5432 es el puerto por defecto de PostgreSQL
    logging: false, // Puedes habilitar el logging si lo necesitas
  }
);

module.exports = sequelize;
