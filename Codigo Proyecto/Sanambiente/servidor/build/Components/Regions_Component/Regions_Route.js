"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla region*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Regions_Service_1 = __importDefault(require("./Regions_Service")); // Se importa la constante RegionService de la clase Region_Service
class RegionRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Region_Route, que seran utilizados cuando se llame a cada una de
    las rutas de regiones*/
    configuracion() {
        this.router.post('/createRegion', Regions_Service_1.default.create);
        this.router.get('/viewRegionById/:id_region', Regions_Service_1.default.viewById);
        this.router.get('/viewRegions', Regions_Service_1.default.view);
        this.router.put('/updateRegions/:id_region', Regions_Service_1.default.update);
        this.router.get('/viewRegionsCity', Regions_Service_1.default.viewNameRegionsCity);
        this.router.get('/viewRegionsStation', Regions_Service_1.default.viewNameRegionsStation);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const regionsRoutes = new RegionRoute();
exports.default = regionsRoutes.router;
