import { DataTypes }  from 'sequelize';
import { sequelize } from '../Database/Database.js';

const Usuario = sequelize.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  correo: {
    type: DataTypes.STRING
  },
  contraseña: {
    type: DataTypes.STRING,
    unique: true
  }
});

export {
  Usuario
}
