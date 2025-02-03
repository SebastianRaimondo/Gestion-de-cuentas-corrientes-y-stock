// src/models/Movimiento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Remito = require('./Remito');
const Producto = require('./Producto');

const Movimiento = sequelize.define('Movimiento', {
  id_movimiento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_remito: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Remito,
      key: 'id_remito'
    }
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Producto,
      key: 'id_producto'
    }
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  monto_total: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'Movimiento',
  timestamps: false
});

// Relaciones: Un Remito tiene muchos Movimientos; un Producto tiene muchos Movimientos.
Movimiento.belongsTo(Remito, { foreignKey: 'id_remito' });
Remito.hasMany(Movimiento, { foreignKey: 'id_remito' });

Movimiento.belongsTo(Producto, { foreignKey: 'id_producto' });
Producto.hasMany(Movimiento, { foreignKey: 'id_producto' });

module.exports = Movimiento;
