// src/models/Remito.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');

const Remito = sequelize.define('Remito', {
  id_remito: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id_cliente'
    }
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total_producto: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
}, {
  tableName: 'Remito',
  timestamps: false
});

Remito.belongsTo(Cliente, { foreignKey: 'id_cliente' });
Cliente.hasMany(Remito, { foreignKey: 'id_cliente' });

module.exports = Remito;
