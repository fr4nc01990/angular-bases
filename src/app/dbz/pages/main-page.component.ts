import { Component } from '@angular/core';
import { CharacterDTO } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css'
})

export class MainComponent  {


    constructor(public dbzService: DbzService) {

        
     }
    
}