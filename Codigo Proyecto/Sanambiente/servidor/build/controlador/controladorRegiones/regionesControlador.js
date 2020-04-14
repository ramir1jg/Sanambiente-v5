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
const basedatos_1 = __importDefault(require("../../basedatos"));
class RegionesControlador {
    listarRegiones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const regiones = yield basedatos_1.default.query('select * FROM regiones order by id_region');
            if (regiones.length != 0) {
                res.status(200).json({
                    regiones: regiones.rows
                });
            }
        });
    }
    listarRegion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_region } = req.params;
            const region = yield basedatos_1.default.query('SELECT * FROM regiones where id_region=$1', [id_region]);
            if (region.length != 0) {
                res.status(200).json({
                    region: region.rows
                });
            }
        });
    }
    crearRegion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield basedatos_1.default.query('INSERT INTO regiones (nombre_region, observacion_region) VALUES ($1,$2)', [req.body.nombre_region, req.body.observacion_region]);
            res.json({ message: 'Region creada correctamente' });
        });
    }
    actualizarRegion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_region } = req.params;
            yield basedatos_1.default.query('update regiones set nombre_region=$1, observacion_region=$2 where id_region =$3', [req.body.nombre_region, req.body.observacion_region, id_region]);
            res.json({ text: 'Region Actualizada' });
        });
    }
}
exports.regionesControlador = new RegionesControlador();
exports.default = exports.regionesControlador;
