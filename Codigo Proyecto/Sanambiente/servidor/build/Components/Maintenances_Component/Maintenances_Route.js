"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla Mantenimiento */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Maintenances_Service_1 = __importDefault(require("./Maintenances_Service")); //Se importa la constante MaintenanceService de la clase Maintenances_Service
class MaintenancesRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Maintenances_Service, que seran utilizados cuando se llame a cada una de
    las rutas de Mantenimiento*/
    configuracion() {
        this.router.post('/createMaintenance', Maintenances_Service_1.default.create);
        this.router.get('/viewMaintenanceById/:id_mantenimiento', Maintenances_Service_1.default.viewById);
        this.router.get('/viewMaintenances', Maintenances_Service_1.default.view);
        this.router.put('/updateMaintenances/:id_mantenimiento', Maintenances_Service_1.default.update);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const maintenancesRoutes = new MaintenancesRoute();
exports.default = maintenancesRoutes.router;
