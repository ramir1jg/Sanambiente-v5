"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sanambienteControlador_1 = __importDefault(require("../controlador/sanambienteControlador"));
class SanambienteRutas {
    constructor() {
        this.router = express_1.Router();
        this.configuracion(); // A la propiedad router (que esta vacia hasta entonces), le agrega lo que esta en el metodo 
        // y despues ejecuta ese metodo configuracion.
    }
    configuracion() {
        this.router.get('/', sanambienteControlador_1.default.listar); // La ruta inicial de la aplicacion, cuando visiten la ruta
        //inicial voy a listar TODAS las regiones
        this.router.get('/:id', sanambienteControlador_1.default.listarUno);
        this.router.post('/', sanambienteControlador_1.default.crear);
        this.router.delete('/:id', sanambienteControlador_1.default.eliminar);
        this.router.put('/:id', sanambienteControlador_1.default.actualizar);
    }
}
const sanambienteRutas = new SanambienteRutas(); // Despues de que se instancia la clase IndexRutas, la guardo dentro de una constante 
// llamada indexRutas
exports.default = sanambienteRutas.router; // Despues exporto esa instancia de clase; pero no todo, solo el enrutador "router"
// Nos vamos a index.ts y utilizo el enrutador "router" que acabo de crear.
