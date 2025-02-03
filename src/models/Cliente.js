// src/models/Cliente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'Cliente',
  timestamps: false
});

module.exports = Cliente;
