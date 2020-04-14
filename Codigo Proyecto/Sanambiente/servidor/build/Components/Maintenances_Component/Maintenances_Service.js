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
class MaintenanceService {
    //metodo para crear un mantenimiento
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id_estacion, id_parte, id_tipo_mantenimiento, id_periodicidad, nombre_funcionario, fecha_inicial, fecha_final, validacion_mantenimiento, novedad_mantenimiento } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createMaintenance'], [id_estacion, id_parte, id_tipo_mantenimiento, id_periodicidad, nombre_funcionario, fecha_inicial, fecha_final, validacion_mantenimiento, novedad_mantenimiento]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Create Maintenance'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    //metodo para actualizar el mantenimiento
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_mantenimiento } = request.params;
                let { id_estacion, id_parte, id_tipo_mantenimiento, id_periodicidad, nombre_funcionario, fecha_inicial, fecha_final, validacion_mantenimiento, novedad_mantenimiento } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updateMaintenance'], [id_estacion, id_parte, id_tipo_mantenimiento, id_periodicidad, nombre_funcionario, fecha_inicial, fecha_final, validacion_mantenimiento, novedad_mantenimiento, id_mantenimiento]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update Maintenance'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver todos los mantenimientos
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let maintenances = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewMaintenances']);
                return Promise.resolve(Handle_Message_1.default(response, 200, maintenances.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver el mantenimiento con todos sus campos los cuales se utilizaran cuando se vaya a modificar el mantenimiento
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_mantenimiento } = request.params;
                let maintenance = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewMaintenance, [id_mantenimiento]);
                console.log(maintenance.rows);
                if (maintenance.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'Maintenance doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, maintenance.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const maintenanceService = new MaintenanceService();
exports.default = maintenanceService;
