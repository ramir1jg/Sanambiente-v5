"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Categories_Service_1 = __importDefault(require("./Categories_Service"));
class CategoriesRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        this.router.post('/createCategory', Categories_Service_1.default.create);
        this.router.get('/viewCategoryById/:id_categoria', Categories_Service_1.default.viewById);
        this.router.get('/viewCategories', Categories_Service_1.default.view);
        this.router.put('/updateCategories/:id_categoria', Categories_Service_1.default.update);
    }
}
const categoryRoute = new CategoriesRoute();
exports.default = categoryRoute.router;
