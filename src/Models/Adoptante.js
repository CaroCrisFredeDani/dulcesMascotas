import { DataTypes }  from 'sequelize';
import { sequelize } from '../Database/Database.js';

const Adoptante = sequelize.define('adoptante', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  correo: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.STRING
  }
});

export {
  Adoptante
}
