/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las categorias*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';// Angular lo importa por defecto
import { CategoriesService } from '../../../Services/Categories_Service/Categories_Service';// Importo los servicios de la clase CategoriesService


@Component({
  selector: 'app-Categories_List',
  templateUrl: './Categories_List.component.html',
  styleUrls: ['./Categories_List.component.css']
})
export class CategoriesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';// Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayCategories: Array<any>;// La variable arrayCategories almacena el listado de las Categoria existentes
  searchText; // Variable que alimenta el campo de busqueda de la vista html

  constructor(private categoriesService: CategoriesService) { }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Categories_List */
  ngOnInit() {
    this.getCategories();
  }

  /* Método con el cual se obtienen las Categorias existentes */
  async getCategories() {
    this.arrayCategories = await this.categoriesService.viewCategories();
  }
}
