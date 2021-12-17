import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
 
  constructor(private dbzService:dbzService) {
  }

  @Input() nuevo: Personaje ={
    nombre:'',
    poder: 0
  }

  //@Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void{
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    //this.nuevoPersonaje.emit(this.nuevo) 
    this.dbzService.agregarPersonaje( this.nuevo );
  
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  
  }  

}
