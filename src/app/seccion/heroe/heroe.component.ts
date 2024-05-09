import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string= "ironman";
  public age:  number= 47;


  get CapitalizarNombre(): string {
    return this.name.toUpperCase();
  }

  NombreMasEdad(): string {

    return `${this.name} - ${this.age}`

  }

  cambiarNombre(): void {

    this.name = 'spiderman'

  }

  cambiarEdad(): void {

    this.age = 25

  }

  reset(): void {

    this.name = 'ironman',
    this.age  = 47
 
  }


}
