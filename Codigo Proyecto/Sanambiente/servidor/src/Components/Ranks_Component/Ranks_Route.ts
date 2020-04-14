/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla de Rangos*/

import { Router } from 'express';
import RankService from './Ranks_Service';

class RankRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    /* Se establecen los metodos de la clase RankService, que seran utilizados 
    cuando se llame a cada una de  las rutas de Rango*/

    configuracion(): void {
        this.router.post('/createRank', RankService.create);
        this.router.get('/viewRankById/:id_rango', RankService.viewById);
        this.router.get('/viewRanks', RankService.view);
        this.router.put('/updateRanks/:id_rango', RankService.update);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const ranksRoutes = new RankRoute();
export default ranksRoutes.router; 