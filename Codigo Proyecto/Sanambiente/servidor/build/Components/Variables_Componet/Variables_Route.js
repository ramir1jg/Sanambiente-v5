"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla Variable*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Variables_Service_1 = __importDefault(require("./Variables_Service")); // Se importa la constante VariableService de la clase Variable_Service
class VariableRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Region_Service, que seran utilizados cuando se llame a cada una de
    las rutas de Variables*/
    configuracion() {
        this.router.post('/createVariable', Variables_Service_1.default.create);
        this.router.get('/viewVariableById/:id_variable', Variables_Service_1.default.viewById);
        this.router.get('/viewVariables', Variables_Service_1.default.view);
        this.router.put('/updateVariables/:id_variable', Variables_Service_1.default.update);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const variableRoutes = new VariableRoute();
exports.default = variableRoutes.router;
