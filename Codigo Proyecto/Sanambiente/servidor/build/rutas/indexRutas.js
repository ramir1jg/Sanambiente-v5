"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControlador_1 = require("../controlador/indexControlador");
const ciudadesControlador_1 = __importDefault(require("../controlador/controladorCiudades/ciudadesControlador"));
class IndexRutas {
    constructor() {
        this.router = express_1.Router();
        this.configuracion(); // A la propiedad router (que esta vacia hasta entonces), le agrega lo que esta en el metodo 
        // y despues ejecuta ese metodo configuracion.
    }
    configuracion() {
        // 1. La ruta inicial de la aplicacion, cuando visiten la ruta inicial
        this.router.get('/home', indexControlador_1.indexControlador.index);
        //2. ruta que se utiliza para listar las regiones creadas id y nombre desde ciudades
        this.router.get('/api/ciudades/ciudades_regiones', ciudadesControlador_1.default.ciudadlistarRegiones);
    }
}
// 1. Despues de que se instancia la clase IndexRutas, la guardo dentro de una constante llamada indexRutas
const indexRutas = new IndexRutas();
/*2. Despues exporto esa instancia de clase; pero no todo, solo el enrutador "router" Nos vamos a index.ts
y utilizo el enrutador "router" que acabo de crear.*/
exports.default = indexRutas.router;
