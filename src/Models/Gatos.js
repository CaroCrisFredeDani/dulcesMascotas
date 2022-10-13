import { DataTypes }  from 'sequelize';
import { sequelize } from '../Database/Database.js';

const Gatos = sequelize.define('gatos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  foto:{
    type: DataTypes.STRING
  },
  nombre: {
    type: DataTypes.STRING
  },
  edad: {
    type: DataTypes.STRING,
  },
  talla: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  }
});

export {
  Gatos
}
