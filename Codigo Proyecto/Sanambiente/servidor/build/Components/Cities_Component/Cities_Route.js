"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla ciudad */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Cities_Service_1 = __importDefault(require("./Cities_Service")); // Se importa la constante CityService de la clase City_Service
class CitiesRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase City_Service, que seran utilizados cuando se llame a cada una de
    las rutas de ciudades*/
    configuracion() {
        this.router.post('/createCity', Cities_Service_1.default.create);
        this.router.get('/viewCityById/:id_ciudad', Cities_Service_1.default.viewById);
        this.router.get('/viewCities', Cities_Service_1.default.view);
        this.router.put('/updateCities/:id_ciudad', Cities_Service_1.default.update);
        this.router.get('/viewCitiesStation', Cities_Service_1.default.viewNameCitiesStation);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const citiesRoutes = new CitiesRoute();
exports.default = citiesRoutes.router;
