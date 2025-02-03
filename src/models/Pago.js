// src/models/Pago.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');

const Pago = sequelize.define('Pago', {
  id_pago: {
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
  monto: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  fecha_pago: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'Pago',
  timestamps: false
});

Pago.belongsTo(Cliente, { foreignKey: 'id_cliente' });
Cliente.hasMany(Pago, { foreignKey: 'id_cliente' });

module.exports = Pago;
