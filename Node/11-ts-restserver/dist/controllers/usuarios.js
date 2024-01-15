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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({ usuarios });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`,
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                email: body.email,
            },
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email,
            });
        }
        const usuario = yield usuario_1.default.create(body);
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id,
            });
        }
        yield usuario.update(body);
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id,
        });
    }
    yield usuario.update({ estado: false });
    // await usuario.destroy();
    res.json(usuario);
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpb3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250cm9sbGVycy91c3Vhcmlvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRUFBd0M7QUFFakMsTUFBTSxXQUFXLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDL0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxpQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRXpDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQSxDQUFDO0FBSlcsUUFBQSxXQUFXLGVBSXRCO0FBRUssTUFBTSxVQUFVLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDOUQsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFMUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUUzQyxJQUFJLE9BQU8sRUFBRTtRQUNYLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbkI7U0FBTTtRQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLEdBQUcsRUFBRSxrQ0FBa0MsRUFBRSxFQUFFO1NBQzVDLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFaVyxRQUFBLFVBQVUsY0FZckI7QUFFSyxNQUFNLFdBQVcsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMvRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBRXJCLElBQUk7UUFDRixNQUFNLFdBQVcsR0FBRyxNQUFNLGlCQUFPLENBQUMsT0FBTyxDQUFDO1lBQ3hDLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUs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