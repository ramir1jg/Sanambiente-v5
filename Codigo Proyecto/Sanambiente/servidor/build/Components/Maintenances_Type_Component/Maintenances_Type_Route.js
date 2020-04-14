"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla tipo de Mantenimiento */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Maintenances_Type_Service_1 = __importDefault(require("./Maintenances_Type_Service")); //Se importa la constante MaintenanceService de la clase Maintenances_Service
class maintenancesTypeRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Maintenances_Service, que seran utilizados cuando se llame a cada una de
    las rutas de Mantenimiento*/
    configuracion() {
        this.router.post('/createMaintenanceType', Maintenances_Type_Service_1.default.create);
        this.router.get('/viewMaintenanceTypeById/:id_tipo_mantenimiento', Maintenances_Type_Service_1.default.viewById);
        this.router.get('/viewMaintenancesType', Maintenances_Type_Service_1.default.view);
        this.router.put('/updateMaintenancesType/:id_tipo_mantenimiento', Maintenances_Type_Service_1.default.update);
        this.router.get('/viewTypesMaintenance', Maintenances_Type_Service_1.default.viewNameTypesMaintenance);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const maintenancesTypeRoutes = new maintenancesTypeRoute();
exports.default = maintenancesTypeRoutes.router;
