import { Component, Input, input } from '@angular/core';
import { character } from '../../../interfaces/dbz.interface';

@Component({
  selector: 'app-lista-dbz',
  templateUrl: './lista-dbz.component.html',
  styleUrl: './lista-dbz.component.css'
})
export class ListaDbzComponent {

  @Input()
  public personajesDBZ: character[] = [

    {
     name: 'asd',
     power: 123         
    }

  ]
}