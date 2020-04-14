"use strict";
/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla Base de tiempo */
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
class TemplateService {
    update(request, response) {
        throw new Error("Method not implemented.");
    }
    view(request, response) {
        throw new Error("Method not implemented.");
    }
    viewById(request, response) {
        throw new Error("Method not implemented.");
    }
    //metodo para crear 
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = request.body;
                for (let index = 0; index < data.length; index++) {
                    console.log(data[index]);
                    basedatos_1.default.query(Handle_Queries_1.handlerQuery['createTemplate'], data[index], (error, data) => {
                        (error) ? console.log(error) : console.log('Success');
                    });
                }
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Create Time'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para listar las estaciones
    viewTemplateByIdStation(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let templates = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewTemplatesStation']);
                return Promise.resolve(Handle_Message_1.default(response, 200, templates.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const timesService = new TemplateService();
exports.default = timesService;
