"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla periodicidad*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Periodicities_Service_1 = __importDefault(require("./Periodicities_Service")); // Se importa la constante PeriodicityService de la clase Region_Service
class PeriodicityRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Periodicity_Route, que seran utilizados cuando se llame a cada una de
    las rutas de periodicidad*/
    configuracion() {
        this.router.post('/createPeriodicity', Periodicities_Service_1.default.create);
        this.router.get('/viewPeriodicityById/:id_periodicidad', Periodicities_Service_1.default.viewById);
        this.router.get('/viewPeriodicities', Periodicities_Service_1.default.view);
        this.router.put('/updatePeriodicity/:id_periodicidad', Periodicities_Service_1.default.update);
        this.router.get('/viewPeriodicitiesMaintenance', Periodicities_Service_1.default.viewTypesPeriodicitiesMaintenance);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const periodicitiesRoutes = new PeriodicityRoute();
exports.default = periodicitiesRoutes.router;
