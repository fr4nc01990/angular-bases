import { Component } from '@angular/core';
import { character } from '../interfaces/dbz.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css'
})

export class MainComponent  {

    public personajesDBZ: character[] = [

        {
         name: 'Goku',
         power: 9500         
        },

        {
        name: 'Gohan',
        power: 6000            
        },
        
        {
        name: 'Vegeta',
        power: 7500            
        },
        

    ]

    onNewCharacter( character: character ):void {

        console.log('MainPage');
        console.log(character)
        
    }

    
}