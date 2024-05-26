import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { CharacterDTO } from '../../../interfaces/dbz.interface';

@Component({
  selector: 'app-lista-dbz',
  templateUrl: './lista-dbz.component.html',
  styleUrl: './lista-dbz.component.css'
})
export class ListaDbzComponent {

  @Input()
  public personajesDBZ: CharacterDTO[] = [

    {
     name: '',
     power: 0         
    }
    
  ]



  @Output()
  onDelete: EventEmitter<number>=new EventEmitter();

  onDeleteCharacter (index: number ):void {
    // TODO: Emitir el ID del personaje
    this.onDelete.emit(index);

  }


}