import { Injectable } from '@angular/core';
import { CharacterDTO } from '../interfaces/dbz.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

    public personajesDBZ: CharacterDTO[] = [

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
    
    onNewCharacter( CharacterDTO: CharacterDTO ):void {

        this.personajesDBZ.push(CharacterDTO);
        
    }
    onDeleteCharacter (index: number ):void {

        this.personajesDBZ.splice(index,1);
    
      }
      
    constructor() { }
    
}