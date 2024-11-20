

import { Router } from 'express';

import { AdminController } from './controller';


export class AppRoutes {

  static get routes(): Router {
    const router = Router();

  

    const controller = new AdminController();

    // shared middleware

    /* **************
     * RUTAS PARA OBTENER LOS DATOS
     * **************/
    router.get('/atletas', controller.getAtletas);
    router.get('/competencias', controller.getCompetencias);
    router.get('/eventos', controller.getEventos);
    router.get('/paises', controller.getPaises);
    router.get('/resultados', controller.getResultados);


    return router;
  }

}