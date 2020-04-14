"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla de organizaciones*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Organizations_Service_1 = __importDefault(require("./Organizations_Service"));
class OrganizationRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Organizacion_Service, que seran utilizados
    cuando se llame a cada una de  las rutas de organizacion*/
    configuracion() {
        this.router.post('/createOrganization', Organizations_Service_1.default.create);
        this.router.get('/viewOrganizationById/:id_organizacion', Organizations_Service_1.default.viewById);
        this.router.put('/updateOrganizations/:id_organizacion', Organizations_Service_1.default.update);
        this.router.get('/viewOrganizations', Organizations_Service_1.default.view);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const organizationsRoutes = new OrganizationRoute();
exports.default = organizationsRoutes.router;
