import { NgModule } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';
import { DbzModule } from '../dbz/dbz.module';



@NgModule({
   
    exports: [

        ListaComponent, 
        HeroeComponent
    ],
    
    declarations: [
    
        ListaComponent, 
        HeroeComponent
    ],
    
    imports: [ 
        
        CommonModule,
       
    
    ]
    
})



export class SeccionModule { }
