import { DataTypes }  from 'sequelize';
import { sequelize } from '../Database/Database.js';

const Perros = sequelize.define('perros', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  raza: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  detalles: {
    type: DataTypes.STRING
  }
});

export {
  Perros
}
