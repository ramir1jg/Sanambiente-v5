"use strict";
/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla ciudad */
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
class CityService {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_ciudad, id_region, observacion_ciudad } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createCity'], [nombre_ciudad, id_region, observacion_ciudad]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Create city'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_ciudad } = request.params;
                let { nombre_ciudad, id_region, observacion_ciudad } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updateCity'], [nombre_ciudad, id_region, observacion_ciudad, id_ciudad]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update city'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cities = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewCities']);
                return Promise.resolve(Handle_Message_1.default(response, 200, cities.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_ciudad } = request.params;
                let city = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewCity, [id_ciudad]);
                console.log(city.rows);
                if (city.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'City doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, city.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const cityService = new CityService();
exports.default = cityService;
