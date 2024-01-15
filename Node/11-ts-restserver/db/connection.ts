import { Sequelize } from 'sequelize';

const db = new Sequelize('test_db', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log,
  define: {
    createdAt: 'fecha_creacion',
    updatedAt: 'fecha_modificacion',
  },
});

export default db;
