"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Conectado a base de datos');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUErQztBQUMvQyxnRUFBMkM7QUFDM0MsZ0RBQXdCO0FBQ3hCLGtFQUFrQztBQUVsQyxNQUFNLE1BQU07SUFPVjtRQUpRLGFBQVEsR0FBRztZQUNqQixRQUFRLEVBQUUsZUFBZTtTQUMxQixDQUFDO1FBR0EsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQztRQUV2QyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVLLFlBQVk7O1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTSxvQkFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDMUM7WUFBQyxPQUFPLEtBQVUsRUFBRTtnQkFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtRQUNILENBQUM7S0FBQTtJQUVELFdBQVc7UUFDVCxPQUFPO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFDO1FBRXJCLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFN0Isa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxpQkFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQUVELGtCQUFlLE1BQU0sQ0FBQyJ9