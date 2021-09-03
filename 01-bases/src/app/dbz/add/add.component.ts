import { Component, Input } from '@angular/core';
import { DBZCharacter } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Input() dbzCharacters: DBZCharacter[] = [];

  //nuevo
  @Input() newCharacter: DBZCharacter = {
    dbzName: 'Holo',
    dbzPower: 0
  }

  add() {
    if (this.newCharacter.dbzName.trim().length === 0) {return;}

    console.log( this.newCharacter);

    this.dbzCharacters.push(this.newCharacter);
    this.newCharacter = {
      dbzName: '',
      dbzPower: 0
    }

    console.log(this.dbzCharacters);
  }


}
