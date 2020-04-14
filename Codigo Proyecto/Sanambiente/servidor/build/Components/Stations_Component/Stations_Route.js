"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla estaciones */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Stations_Service_1 = __importDefault(require("./Stations_Service")); // Se importa la constante StationsService de la clase Station_Service
class StationsRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Stations_Service, que seran utilizados cuando se llame a cada una de
    las rutas de estaciones*/
    configuracion() {
        this.router.post('/createStation', Stations_Service_1.default.create);
        this.router.get('/viewStationById/:id_estacion', Stations_Service_1.default.viewById);
        this.router.get('/viewStations', Stations_Service_1.default.view);
        this.router.put('/updateStations/:id_estacion', Stations_Service_1.default.update);
        this.router.get('/viewStationsRank', Stations_Service_1.default.viewNameStationsRank);
        this.router.get('/viewStationsMaintenance', Stations_Service_1.default.viewNameStationsMaintenance);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const stationsRoutes = new StationsRoute();
exports.default = stationsRoutes.router;
