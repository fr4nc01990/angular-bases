import { Component, Output } from '@angular/core';
import { CharacterDTO } from '../../interfaces/dbz.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-dbz',
  templateUrl: './formulario-dbz.component.html',
  styleUrl: './formulario-dbz.component.css'
})
export class FormularioDbzComponent {

  @Output()
  public onNewCharacterChild: EventEmitter<CharacterDTO> = new EventEmitter();


  public addCharacter: CharacterDTO = {

    name: '',
    power: 0

  }
  public emitCharacter (): void {

    console.log(this.addCharacter);
    if ( this.addCharacter.name.length === 0 ) return;

    this.onNewCharacterChild.emit(this.addCharacter);

  
    this.addCharacter = {
      name: '',
      power: 0,
    };

  }

  

}


