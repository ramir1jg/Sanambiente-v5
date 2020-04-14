"use strict";
/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla gmt */
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
class GmtService {
    //metodo para crear un gmt
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_gmt, observacion_gmt } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createGmt'], [nombre_gmt, observacion_gmt]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Create gmt'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    //metodo para actualizar un gmt
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_gmt } = request.params;
                let { nombre_gmt, observacion_gmt } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updateGmt'], [nombre_gmt, observacion_gmt, id_gmt]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update gmt'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver solo el nombre de los gmt en una lista desplegable
    viewNameGmtStation(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let regions = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewGmtStation']);
                return Promise.resolve(Handle_Message_1.default(response, 200, regions.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver todas los gmt con todos sus campos
    view(_, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let gmt = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewGmts']);
                return Promise.resolve(Handle_Message_1.default(response, 200, gmt.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver la Gmt con todos sus campos los cuales se utilizaran cuando se vaya a modificar gmt
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_gmt } = request.params;
                let gmt = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewGmt, [id_gmt]);
                console.log(gmt.rows);
                if (gmt.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'gmt doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, gmt.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const gmtService = new GmtService();
exports.default = gmtService;
