import { Component, Output } from '@angular/core';
import { character } from '../../interfaces/dbz.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-dbz',
  templateUrl: './formulario-dbz.component.html',
  styleUrl: './formulario-dbz.component.css'
})
export class FormularioDbzComponent {

  @Output()
  public onNewCharacter: EventEmitter<character> = new EventEmitter();


  public addCharacter: character = {

    name: '',
    power: 0

  }
  public emitCharacter (): void {

    console.log(this.addCharacter);
    if ( this.addCharacter.name.length === 0 ) return;

    this.onNewCharacter.emit(this.addCharacter);


    this.addCharacter.name= '';
    this.addCharacter.power= 0;
  }

  

}


