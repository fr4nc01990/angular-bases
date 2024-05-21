import { Component } from '@angular/core';
import { character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-formulario-dbz',
  templateUrl: './formulario-dbz.component.html',
  styleUrl: './formulario-dbz.component.css'
})
export class FormularioDbzComponent {

  public addCharacter: character = {

    name: '',
    power: 0

  }
  public emitCharacter (): void {

    console.log(this.addCharacter)
  }

  

}


