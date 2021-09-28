import { Pipe, PipeTransform } from '@angular/core';
import { Heroe, Color } from '../interfaces/sales.interface';

@Pipe({
  name: 'organizePipe'
})
export class OrganizePipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string= ""): Heroe[] {
  
    if(orderBy === "") {
      return heroes;
    } else if  (orderBy == "name") {

      heroes = heroes.sort( 
        (a,b) =>
          ( a.name > b.name ) ? 1 : -1 ); 
    } else if  (orderBy == "color") {
      
      heroes = heroes.sort( 
        (a,b) =>
          ( a.color > b.color ) ? 1 : -1 ); 
    } else if  (orderBy == "fly") {
      
      heroes = heroes.sort( 
        (a,b) =>
          ( a.fly > b.fly ) ? 1 : -1 ); 
    }
      
    return heroes;
  }
}
