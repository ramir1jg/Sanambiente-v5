"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class CiudadesRegionesRutas {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        //  this.router.get('/', ciudadesRegionesControlador.ciudadlistarRegiones);
    }
}
const ciudadesRegionesRutas = new CiudadesRegionesRutas();
exports.default = ciudadesRegionesRutas.router;
