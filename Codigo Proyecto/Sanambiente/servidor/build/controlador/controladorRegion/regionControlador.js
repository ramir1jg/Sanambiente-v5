"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basedatos_1 = __importDefault(require("../../basedatos"));
class RegionControlador {
    listarRegion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const regiones = yield basedatos_1.default.query('select * from regiones');
            res.json(regiones);
        });
    }
    listarUnaRegion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const region = yield basedatos_1.default.query('SELECT * FROM regiones where id_region=$1', [id]);
            /* console.log(region.length);
             if(region.length>0){
                 return res.json(region[0]);
             }
             res.status(404).json({text: "La region no existe"});*/
            res.json(region);
            res.json({ message: 'Region encontrada' });
        });
    }
    crearRegion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // pool.connect();
            // res.json(pool);
            yield basedatos_1.default.query('INSERT INTO regiones (nombre_region, observacion_region) VALUES ($1,$2)', [req.body.nombre_region, req.body.observacion_region]);
            res.json({ message: 'Region creada correctamente' });
        });
    }
    /* public eliminar (req:Request,res:Response) {
        res.json({text :'Eliminando Region '+ req.params.id});
     }*/
    actualizarRegion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield basedatos_1.default.query('update regiones set nombre_region=$1, observacion_region=$2 where id_region =$3', [req.body.nombre_region, req.body.observacion_region, id]);
            res.json({ text: 'Region Actualizada' });
        });
    }
}
exports.regionControlador = new RegionControlador();
exports.default = exports.regionControlador;
