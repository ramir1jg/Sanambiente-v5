"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basedatos_1 = __importDefault(require("../../basedatos"));
const Handle_Queries_1 = require("../../Hanldlers/Handle_Queries");
const Handle_Message_1 = __importDefault(require("../../Hanldlers/Handle_Message"));
// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class RankService {
    //metodo para crear un Rango
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_rango, valor_minimo, valor_maximo, id_estacion, observacion_rango } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createRank'], [nombre_rango, valor_minimo, valor_maximo, id_estacion, observacion_rango]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Create Rank'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para actualizar el Rango 
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_rango } = request.params;
                let { nombre_rango, valor_minimo, valor_maximo, id_estacion, observacion_rango } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updateRank'], [nombre_rango, valor_minimo, valor_maximo, id_estacion, observacion_rango, id_rango]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update Rank'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver todos los Rangos
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let stations = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewRanks']);
                return Promise.resolve(Handle_Message_1.default(response, 200, stations.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para consultar si exite un Rango 
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_rango } = request.params;
                let rank = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewRank, [id_rango]);
                if (rank.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'Rank doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, rank.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const rankService = new RankService();
exports.default = rankService;
