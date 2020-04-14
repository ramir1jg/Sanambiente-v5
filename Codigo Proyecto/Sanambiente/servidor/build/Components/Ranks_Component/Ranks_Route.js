"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla de Rangos*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Ranks_Service_1 = __importDefault(require("./Ranks_Service"));
class RankRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase RankService, que seran utilizados
    cuando se llame a cada una de  las rutas de Rango*/
    configuracion() {
        this.router.post('/createRank', Ranks_Service_1.default.create);
        this.router.get('/viewRankById/:id_rango', Ranks_Service_1.default.viewById);
        this.router.get('/viewRanks', Ranks_Service_1.default.view);
        this.router.put('/updateRanks/:id_rango', Ranks_Service_1.default.update);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const ranksRoutes = new RankRoute();
exports.default = ranksRoutes.router;
