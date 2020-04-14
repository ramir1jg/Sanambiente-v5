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
class CiudadesControlador {
    listarCiudades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ciudades = yield basedatos_1.default.query('select id_ciudad, nombre_ciudad, observacion_ciudad ' +
                ',regiones.nombre_region FROM regiones, ciudades where regiones.id_region=ciudades.id_region order by id_ciudad;');
            if (ciudades.length != 0) {
                res.status(200).json({
                    ciudades: ciudades.rows
                });
            }
        });
    }
    listarCiudad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_ciudad } = req.params;
            const ciudad = yield basedatos_1.default.query('SELECT id_ciudad, nombre_ciudad, regiones.id_region, observacion_ciudad ' +
                ',regiones.nombre_region FROM regiones, ciudades where regiones.id_region=ciudades.id_region and id_ciudad=$1', [id_ciudad]);
            if (ciudad.length != 0) {
                res.status(200).json({
                    ciudad: ciudad.rows
                });
            }
        });
    }
    crearCiudad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield basedatos_1.default.query('INSERT INTO ciudades (nombre_ciudad,id_region,observacion_ciudad) VALUES ($1,$2,$3)', [req.body.nombre_ciudad, req.body.id_region, req.body.observacion_ciudad]);
            res.json({ message: 'Ciudad creada correctamente' });
        });
    }
    actualizarCiudad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_ciudad } = req.params;
            yield basedatos_1.default.query('update ciudades set nombre_ciudad=$1,id_region=$2,observacion_ciudad=$3 where id_ciudad =$4', [req.body.nombre_ciudad, req.body.id_region, req.body.observacion_ciudad, id_ciudad]);
            res.json({ text: 'Ciudad Actualizada' });
        });
    }
    ciudadlistarRegiones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const regionesCiudades = yield basedatos_1.default.query('select id_region, nombre_region FROM regiones order by id_region');
            if (regionesCiudades.length != 0) {
                res.status(200).json({
                    regionesCiudades: regionesCiudades.rows
                });
            }
        });
    }
}
exports.ciudadesControlador = new CiudadesControlador();
exports.default = exports.ciudadesControlador;
