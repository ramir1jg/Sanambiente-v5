"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regionControlador_1 = __importDefault(require("../../controlador/controladorRegion/regionControlador"));
class RegionRutas {
    constructor() {
        this.router = express_1.Router();
        this.configuracion(); // A la propiedad router (que esta vacia hasta entonces), le agrega lo que esta en el metodo 
        // y despues ejecuta ese metodo configuracion.
    }
    configuracion() {
        this.router.get('/', regionControlador_1.default.listarRegion); // La ruta inicial de la aplicacion, cuando visiten la ruta
        //inicial voy a listar TODAS las regiones
        this.router.get('/:id', regionControlador_1.default.listarUnaRegion);
        this.router.post('/', regionControlador_1.default.crearRegion);
        // this.router.delete('/:id',sanambienteControlador.eliminar);
        this.router.put('/:id', regionControlador_1.default.actualizarRegion);
    }
}
const regionRutas = new RegionRutas(); // Despues de que se instancia la clase IndexRutas, la guardo dentro de una constante 
// llamada indexRutas
exports.default = regionRutas.router; // Despues exporto esa instancia de clase; pero no todo, solo el enrutador "router"
// Nos vamos a index.ts y utilizo el enrutador "router" que acabo de crear.
