/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla Conectar por FTP */

 import { Router } from 'express';
import connectionFTPService from './conection_FTP_SERVICE';
 
 
 class ConnectionFTP {
 
     public router: Router = Router();
 
     constructor() {
         this.configuracion();
     }
     /* Se establecen los metodos de la clase connectionFTPService, que seran utilizados cuando se llame a cada una de 
     las rutas de conectar por ftp*/
 
     configuracion(): void {
         this.router.post('/createFTP', connectionFTPService.createFTP); 
         this.router.get('/viewFTP', connectionFTPService.viewFTPDATA);
     }
 }
 
 // Se crea y exporta una constante que contiene las rutas de esta clase.
 const connectionFTPRouter = new ConnectionFTP();
 export default connectionFTPRouter.router; 