import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  public temasRenga : string[] = ['Despedazado por mil partes', 'A la carga mi rocanrol', 'El final es en donde partí', 'Balada del diablo y la muerte', 'Cuando vendrán', 'Psilocybe mexicana', 'Paja brava', 'Lo frágil de la locura', 'Veneno', 'El viento que todo empuja', 'Hablando de la libertad']
  public trackBorrado?: string

  borrarUltimoTrack ():void {

   this.trackBorrado = this.temasRenga.pop();

  }


}
