import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {
  heroes: string[] =["Spiderman", "Ironman", "Hulk", "Thor", "Deadpool"];
  heroeBorrado: string = "";

  borrarHeroe(){
    //this.heroes.pop(); //remueve el ultimo
    this.heroeBorrado = this.heroes.shift() || "";    //remueve el primero y lo retorna
    
  }

}
