import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main-page.component';
import { ListaDbzComponent } from './components/lista-dbz/lista/lista-dbz.component';
import { FormularioDbzComponent } from './components/formulario-dbz/formulario-dbz.component';



@NgModule({
  declarations: [
    
    MainComponent,
    ListaDbzComponent,
    FormularioDbzComponent

  ],

  imports: [

    CommonModule
  ],

  exports: [
    
    MainComponent
  ]
})
export class DbzModule { }
