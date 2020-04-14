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
class MaintenanceTypeService {
    //metodo para crear un tipo de mantenimiento
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_tipo_mantenimiento, observacion_tipo_mantenimiento } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createMaintenanceType'], [nombre_tipo_mantenimiento, observacion_tipo_mantenimiento]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Create Maintenance Type'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    //metodo para actualizar el tipo de mantenimiento
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_tipo_mantenimiento } = request.params;
                let { nombre_tipo_mantenimiento, observacion_tipo_mantenimiento } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updateMaintenanceType'], [nombre_tipo_mantenimiento, observacion_tipo_mantenimiento, id_tipo_mantenimiento]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update Maintenance Type'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver todos los tipos de mantenimientos
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let maintenancesType = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewMaintenancesType']);
                return Promise.resolve(Handle_Message_1.default(response, 200, maintenancesType.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver el tipo de mantenimiento con todos sus campos los cuales se utilizaran cuando se vaya a modificar el tipo de mantenimiento
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_tipo_mantenimiento } = request.params;
                let maintenanceType = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewMaintenanceType, [id_tipo_mantenimiento]);
                console.log(maintenanceType.rows);
                if (maintenanceType.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'Maintenance type doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, maintenanceType.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver solo el nombre de los tipos de mantenimiento en una lista desplegable. Lo utiliza la vista de mantenimiento
    viewNameTypesMaintenance(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let typesMaintenance = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewTypesMaintenance']);
                return Promise.resolve(Handle_Message_1.default(response, 200, typesMaintenance.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const maintenanceTypeService = new MaintenanceTypeService();
exports.default = maintenanceTypeService;
