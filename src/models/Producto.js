// src/models/Producto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {
  id_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
}, {
  tableName: 'Producto',
  timestamps: false
});

module.exports = Producto;
