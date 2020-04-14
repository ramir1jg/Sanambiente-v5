/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla Categoria */

import { Router } from 'express';
import CategoryService from './Categories_Service'; // Se importa la constante CategoryService de la clase Categories_Service


class CategoriesRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Categories_Service, que seran utilizados cuando se llame a cada una de 
    las rutas de Categorias*/

    configuracion(): void {
        this.router.post('/createCategory', CategoryService.create);
        this.router.get('/viewCategoryById/:id_categoria', CategoryService.viewById);
        this.router.get('/viewCategories', CategoryService.view);
        this.router.put('/updateCategories/:id_categoria', CategoryService.update);
        this.router.get('/viewCategoriesStation', CategoryService.viewNameCategoriesStation);
    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const categoriesRoutes = new CategoriesRoute();
export default categoriesRoutes.router;