"use strict";
/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla partes */
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
class PartService {
    //metodo para crear una nueva parte
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_parte, codigo_catalogo, observacion_parte } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createPart'], [nombre_parte, codigo_catalogo, observacion_parte]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Created Part'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // Actualizar parte
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_parte } = request.params;
                let { nombre_parte, codigo_catalogo, observacion_parte } = request.body;
                console.log(id_parte, '\n', request.body);
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updatePart'], [nombre_parte, codigo_catalogo, observacion_parte, id_parte]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update Periodicity'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver todas las partes con todos sus campos 
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let parts = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewParts']);
                return Promise.resolve(Handle_Message_1.default(response, 200, parts.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver la parte con todos sus campos los cuales se utilizaran cuando se vaya a modificar la parte
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_parte } = request.params;
                let part = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewPart, [id_parte]);
                if (part.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'Part doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, part.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver solo el nombre de las partes de las estaciones en una lista desplegable. Lo utiliza la vista de mantenimiento
    viewNamePartsStations(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let parts = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewPartsStations']);
                return Promise.resolve(Handle_Message_1.default(response, 200, parts.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const partService = new PartService();
exports.default = partService;
