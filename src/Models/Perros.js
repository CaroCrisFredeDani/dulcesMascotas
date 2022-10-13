import { DataTypes }  from 'sequelize';
import { sequelize } from '../Database/Database.js';

const Perros = sequelize.define('perros', {
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
    type: DataTypes.INTEGER,
  },
  talla: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  }
});

export {
  Perros
}
