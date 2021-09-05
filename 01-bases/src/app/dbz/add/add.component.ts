import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DBZCharacter } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  //nuevo
  @Input() newCharacter: DBZCharacter = {
    dbzName: '',
    dbzPower: 0
  }

  constructor( private dbzService:DbzService) {}

  //Output is used to send values from son to father, inside add: .emit()
  //@Output() onNewCharacter: EventEmitter<DBZCharacter> = new EventEmitter();

  add() {
    if (this.newCharacter.dbzName.trim().length === 0) {return;}

    console.log( this.newCharacter);
    //In main-pageHTML --> (onNewCharacter) = "addNewCharacter()" The function will be created in main-pageTS
    //this.onNewCharacter.emit(this.newCharacter);

    this.dbzService.addCharacter(this.newCharacter);

    this.newCharacter = {
      dbzName: '',
      dbzPower: 0
    }

  }


}
