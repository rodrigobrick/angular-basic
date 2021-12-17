import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class dbzService {
    constructor(){
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push( personaje )
    }

    private _personajes: Personaje[] = [
        {
          nombre: "Goku",
          poder: 15000
        },
        {
          nombre: "Vegueta",
          poder: 7000
        }
      ];
    
    get personajes():Personaje[]{
        return [...this._personajes];
    }
}