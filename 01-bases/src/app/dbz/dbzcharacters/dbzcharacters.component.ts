import { Component, Input } from '@angular/core';
import { DBZCharacter } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-dbzcharacters',
  templateUrl: './dbzcharacters.component.html'
})
export class DBZCharactersComponent{

  //@Input brings dbzCharacters --> from main-page.component.html
  @Input() dbzCharacters: DBZCharacter[] = [];
  
}
