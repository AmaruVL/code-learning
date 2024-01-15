"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('Usuario', {
    nombres: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
}, {
    tableName: 'usuarios',
    modelName: 'Usuario',
});
exports.default = Usuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy91c3VhcmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQXNDO0FBQ3RDLGtFQUFrQztBQUVsQyxNQUFNLE9BQU8sR0FBRyxvQkFBRSxDQUFDLE1BQU0sQ0FDdkIsU0FBUyxFQUNUO0lBQ0UsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtLQUN2QjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07S0FDdkI7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO0tBQ3hCO0NBQ0YsRUFDRDtJQUNFLFNBQVMsRUFBRSxVQUFVO0lBQ3JCLFNBQVMsRUFBRSxTQUFTO0NBQ3JCLENBQ0YsQ0FBQztBQUVGLGtCQUFlLE9BQU8sQ0FBQyJ9