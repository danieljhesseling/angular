import { Component, Input } from '@angular/core';

import { DBZCharacter } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //Getter from the service
  get dbzCharacters(): DBZCharacter[] {
    return this.dbzService.dbzCharacters;
  }

  addNewCharacter( argument: DBZCharacter) { 
    //To initialite the debugger when it reachs that part of the code
    this.dbzCharacters.push(argument);
  }

  //Constructor of the service -> Injection of dependencies
  constructor( private dbzService: DbzService) {}

}
