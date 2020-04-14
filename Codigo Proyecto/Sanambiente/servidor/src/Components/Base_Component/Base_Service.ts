/*Clase en la cual se instancia el patron repository*/

import { Request, Response } from 'express';

/*Se crea y exporta una interfaz que contiene los metodos de crear, actualizar, consultar y consultar 
por ID de manera abstracta, cada uno de estos sera utilizado de la forma en que se necesite por cada clase*/

export default interface BaseService<T> {
    create(request: Request, response: Response): Promise<T>;

    update(request: Request, response: Response): Promise<T>;

    view(request: Request, response: Response): Promise<T>;

    viewById(request: Request, response: Response): Promise<T>;
} 