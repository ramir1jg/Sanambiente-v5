"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla GMT */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Gmt_Service_1 = __importDefault(require("./Gmt_Service")); // Se importa la constante Gmt_Service de la clase Gmt_Service
class GmtRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Gmt_Service, que seran utilizados cuando se llame a cada una de
    las rutas de gmt*/
    configuracion() {
        this.router.post('/createGmt', Gmt_Service_1.default.create);
        this.router.get('/viewGmtById/:id_gmt', Gmt_Service_1.default.viewById);
        this.router.get('/viewGmt', Gmt_Service_1.default.view);
        this.router.put('/updateGmt/:id_gmt', Gmt_Service_1.default.update);
        this.router.get('/viewGmtStation', Gmt_Service_1.default.viewNameGmtStation);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const gmtRoutes = new GmtRoute();
exports.default = gmtRoutes.router;
