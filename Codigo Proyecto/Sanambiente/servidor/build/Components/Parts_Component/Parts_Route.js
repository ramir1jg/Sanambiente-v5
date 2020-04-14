"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla partes*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Parts_Service_1 = __importDefault(require("./Parts_Service")); // Se importa la constante PartService de la clase Parts_Service
class PartRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Part_Route, que seran utilizados cuando se llame a cada una de
    las rutas de partes*/
    configuracion() {
        this.router.post('/createPart', Parts_Service_1.default.create);
        this.router.get('/viewPartById/:id_parte', Parts_Service_1.default.viewById);
        this.router.get('/viewParts', Parts_Service_1.default.view);
        this.router.put('/updatePart/:id_parte', Parts_Service_1.default.update);
        this.router.get('/viewPartsStations', Parts_Service_1.default.viewNamePartsStations);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const partsRoutes = new PartRoute();
exports.default = partsRoutes.router;
