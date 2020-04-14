"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ciudadesControlador_1 = __importDefault(require("../../controlador/controladorCiudades/ciudadesControlador"));
class CiudadesRutas {
    constructor() {
        this.router = express_1.Router();
        this.configuracion(); // A la propiedad router (que esta vacia hasta entonces), le agrega lo que esta en el metodo 
        // y despues ejecuta ese metodo configuracion.
    }
    configuracion() {
        /* La ruta inicial de la aplicacion, cuando visiten la ruta inicial ciudades voy a listar
            TODAS las regiones*/
        this.router.get('/', ciudadesControlador_1.default.listarCiudades);
        this.router.get('/:id_ciudad', ciudadesControlador_1.default.listarCiudad);
        this.router.post('/', ciudadesControlador_1.default.crearCiudad);
        this.router.put('/:id_ciudad', ciudadesControlador_1.default.actualizarCiudad);
        this.router.get('/', ciudadesControlador_1.default.ciudadlistarRegiones);
    }
}
/* Despues de que se instancia la clase IndexRutas, la guardo dentro de una constante
llamada ciudadesRutas*/
const ciudadesRutas = new CiudadesRutas();
/* Despues exporto esa instancia de clase; pero no todo, solo el enrutador "router"
Nos vamos a index.ts y utilizo el enrutador "router" que acabo de crear.*/
exports.default = ciudadesRutas.router;
