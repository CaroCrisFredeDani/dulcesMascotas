import  Sequelize  from "sequelize";

const sequelize = new Sequelize('dulcesMascotas', 'postgres', '12345678', {
  host: 'localhost',
  dialect: 'postgres'
});

export {
  sequelize
}
