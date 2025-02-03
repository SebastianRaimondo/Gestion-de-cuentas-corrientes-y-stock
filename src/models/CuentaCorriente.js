// src/models/CuentaCorriente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');

const CuentaCorriente = sequelize.define('CuentaCorriente', {
  id_cuenta: {
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
  saldo_actual: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  fecha_apertura: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'Cuenta_Corriente',
  timestamps: false
});

// Definir la relación
CuentaCorriente.belongsTo(Cliente, { foreignKey: 'id_cliente' });
Cliente.hasMany(CuentaCorriente, { foreignKey: 'id_cliente' });

module.exports = CuentaCorriente;
