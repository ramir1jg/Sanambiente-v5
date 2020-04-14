"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla de Alertas*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Alerts_Service_1 = __importDefault(require("./Alerts_Service"));
class AlertsRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase alertService, que seran utilizados
    cuando se llame a cada una de  las rutas de alerta*/
    configuracion() {
        this.router.post('/createAlert', Alerts_Service_1.default.create);
        this.router.get('/viewAlertById/:id_alerta', Alerts_Service_1.default.viewById);
        this.router.put('/updateAlerts/:id_alerta', Alerts_Service_1.default.update);
        this.router.get('/viewAlerts', Alerts_Service_1.default.view);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const alertsRoutes = new AlertsRoute();
exports.default = alertsRoutes.router;
