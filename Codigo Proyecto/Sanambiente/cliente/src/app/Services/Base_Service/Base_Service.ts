/* Clase que contiene los servicios de manera generica del lado del cliente*/
import { Injectable } from '@angular/core'; // Angular lo importa por defecto
import { HttpClient } from '@angular/common/http'; // Permite utilizar los servicios http

@Injectable()
export default class BaseService {

    constructor(private httpClient: HttpClient) { }

    // Se implementa los servicios http y se instancia el tipo de elemeto que utilizara cada uno de ellos

    async create(body, route: string) {
        return this.httpClient.post(`${route}`, body).toPromise().then((responseServer: any) => responseServer.message);
    }

    view(route: string) {
        return this.httpClient.get(`${route}`);
    }

    async update(body, route: string) {
        return this.httpClient.put(`${route}`, body).subscribe(async (responseServer: any) => {
            let message = await responseServer.message;
            if (message != 'Error') {
                return message;
            }
        })
    }
}