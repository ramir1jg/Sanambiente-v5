"use strict";
/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla periodicidad */
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
class PeriodicityService {
    //metodo para crear una nueva periodicidad
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { tipo_periodicidad, observacion_periodicidad } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createPeriodicity'], [tipo_periodicidad, observacion_periodicidad]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Created Periodicity'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // Actualizar periodicidad
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_periodicidad } = request.params;
                let { tipo_periodicidad, observacion_periodicidad } = request.body;
                console.log(id_periodicidad, '\n', request.body);
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updatePeriodicity'], [tipo_periodicidad, observacion_periodicidad, id_periodicidad]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update Periodicity'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver todas las periodicidades con todos sus campos 
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let periodicities = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewPeriodicities']);
                return Promise.resolve(Handle_Message_1.default(response, 200, periodicities.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver la periodicidad con todos sus campos los cuales se utilizaran cuando se vaya a modificar la periodicidad
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_periodicidad } = request.params;
                let periodicity = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewPeriodicity, [id_periodicidad]);
                if (periodicity.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'Periodicity doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, periodicity.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver solo los tipos de periodicidad en una lista desplegable. Lo utiliza la vista de mantenimiento
    viewTypesPeriodicitiesMaintenance(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let periodicities = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewPeriodicitiesMaintenance']);
                return Promise.resolve(Handle_Message_1.default(response, 200, periodicities.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const periodicityService = new PeriodicityService();
exports.default = periodicityService;
