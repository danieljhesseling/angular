import { Component, Input } from '@angular/core';

import { DBZCharacter } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //personajes
  @Input() dbzCharacters: DBZCharacter[] = [
    {
      dbzName: 'Goku',
      dbzPower: 14000
    },
    {
      dbzName: 'Vegeta',
      dbzPower: 10000
    }
  ];

  newCharacter: DBZCharacter = {
    dbzName: 'Master Mutenroshi',
    dbzPower: 9000
  }

}
