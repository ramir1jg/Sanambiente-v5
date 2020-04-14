"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla Plantilla*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Template_Service_1 = __importDefault(require("./Template_Service"));
class TemplateRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase TemplateRoute, que seran utilizados
    cuando se llame a cada una de  las rutas de Plantilla*/
    configuracion() {
        this.router.post('/createTemplate', Template_Service_1.default.create);
        this.router.get('/viewTemplatesById', Template_Service_1.default.viewTemplateByIdStation);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const timesRoutes = new TemplateRoute();
exports.default = timesRoutes.router;
