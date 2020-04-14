"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla ciudad */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const conection_FTP_SERVICE_1 = __importDefault(require("./conection_FTP_SERVICE"));
class ConnectionFTP {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase City_Service, que seran utilizados cuando se llame a cada una de
    las rutas de ciudades*/
    configuracion() {
        this.router.post('/createFTP', conection_FTP_SERVICE_1.default.createFTP);
        this.router.get('/viewFTP', conection_FTP_SERVICE_1.default.viewFTPDATA);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const connectionFTPRouter = new ConnectionFTP();
exports.default = connectionFTPRouter.router;
