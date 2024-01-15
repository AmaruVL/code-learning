"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('test_db', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,
    define: {
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_modificacion',
    },
});
exports.default = db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2RiL2Nvbm5lY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBc0M7QUFFdEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFO0lBQ25ELElBQUksRUFBRSxXQUFXO0lBQ2pCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRztJQUNwQixNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRSxvQkFBb0I7S0FDaEM7Q0FDRixDQUFDLENBQUM7QUFFSCxrQkFBZSxFQUFFLENBQUMifQ==