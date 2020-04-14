"use strict";
/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla Variables */
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
class VariableService {
    //metodo para crear una variable
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_variable, observacion_variable } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createVariable'], [nombre_variable, observacion_variable]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Created Variable'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // Actualizar variable
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_variable } = request.params;
                let { nombre_variable, observacion_variable } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updateVariable'], [nombre_variable, observacion_variable, id_variable]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update Variable'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver todas las Variable con todos sus campos 
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let variables = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewVariables']);
                return Promise.resolve(Handle_Message_1.default(response, 200, variables.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver la Variable con todos sus campos los cuales se utilizaran cuando se vaya a modificar la Variable
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_variable } = request.params;
                let variable = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewVariable, [id_variable]);
                if (variable.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'Variable doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, variable.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const variableService = new VariableService();
exports.default = variableService;
