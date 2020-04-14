"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla Categoria */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Categories_Service_1 = __importDefault(require("./Categories_Service")); // Se importa la constante CategoryService de la clase Categories_Service
class CategoriesRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Categories_Service, que seran utilizados cuando se llame a cada una de
    las rutas de Categorias*/
    configuracion() {
        this.router.post('/createCategory', Categories_Service_1.default.create);
        this.router.get('/viewCategoryById/:id_categoria', Categories_Service_1.default.viewById);
        this.router.get('/viewCategories', Categories_Service_1.default.view);
        this.router.put('/updateCategories/:id_categoria', Categories_Service_1.default.update);
        this.router.get('/viewCategoriesStation', Categories_Service_1.default.viewNameCategoriesStation);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const categoriesRoutes = new CategoriesRoute();
exports.default = categoriesRoutes.router;
