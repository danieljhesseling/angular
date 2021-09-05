import { Injectable, Input } from "@angular/core";

import { DBZCharacter } from "../interfaces/dbz.interfaces";


@Injectable()
export class DbzService { 
//personajes
  private _dbzCharacters: DBZCharacter[] = [
    {
      dbzName: 'Goku',
      dbzPower: 14000
    },
    {
      dbzName: 'Vegeta',
      dbzPower: 10000
    }
  ];

  get dbzCharacters(): DBZCharacter[] {
      return [...this._dbzCharacters];
  }

    addCharacter (dbzCharacter:DBZCharacter){
        this._dbzCharacters.push(dbzCharacter);
    }

}