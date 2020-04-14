/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las Categorias*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';// Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro
import { CategoriesService } from '../../../Services/Categories_Service/Categories_Service';//Importo los servicios de la clase Categories_Service


@Component({
  selector: 'app-Categories_body',
  templateUrl: './Categories_body.component.html',
  styleUrls: ['./Categories_body.component.css']
})
export class CategoriesBodyComponent implements OnInit {

  public formCategory: FormGroup; // La variable formCategory permite administrar las validaciones y restricciones del formulario
  public arrayCategories; // La variable arrayCategories almacena el listado de las ciudades existentes. Utilizada cuando se edita una ciudad
  public edit: boolean = false;// Le permite identificar al boton guardar cuando se esta Guardando una nueva Categoria o se esta editando una Categoria
  public hide = false;// Permite identificar cuando se debe o no, mostrar el campo del id de la Categoria, en la vista html

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  constructor(private categoriesService: CategoriesService, private router: Router, private activedRoute: ActivatedRoute) { // instancio el servicio dentro de una variable llamada regionServicio
    this.formCategory = new FormGroup({
      'nombre_categoria': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'observacion_categoria': new FormControl('', [Validators.required, Validators.maxLength(249.9)]),
    });
    this.arrayCategories = {
      observacion_categoria: '' //Se usa para definir el campo observacion_categoria y poder mostrar el conteo de caracteres restantes
    };
  }
  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Categories_Body */
  ngOnInit(): void {
    this.viewCategoryById() // Toma el id de la Categoria, cuando se vaya a editar alguna de ellas
  }

  /* Método con el cual se crea una nueva Categoria */
  async createCategory() {
    if (this.formCategory.valid) {
      await this.categoriesService.createCategory(this.formCategory.value);
      alert('Categoría creada correctamente');
      this.router.navigate(['/category']);
    }
  }

  /* Método con el cual se identifica la Categoria cuya información va a ser actualizada */
  async viewCategoryById() {
    let id = this.activedRoute.snapshot.params.id_categoria;
    if (id !== undefined) {
      let category = await this.categoriesService.viewCategoryById(id).subscribe((element: any) => {
        this.arrayCategories = element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información de la Categoria seleccionada */
  async updateCategory() {
    let id = this.activedRoute.snapshot.params.id_categoria;
    this.formCategory.patchValue({
      nombre_categoria: this.arrayCategories.nombre_categoria,
      observacion_categoria: this.arrayCategories.observacion_categoria
    })
    this.categoriesService.updateCategory(this.formCategory.value, id)
    alert('Categoría actualizada correctamente');
    this.router.navigate(['/category']);
  }



}
