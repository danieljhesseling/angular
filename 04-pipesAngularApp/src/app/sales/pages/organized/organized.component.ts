import { Component } from '@angular/core';

import { Heroe, Color } from '../../interfaces/sales.interface';


@Component({
  selector: 'app-organized',
  templateUrl: './organized.component.html',
  styles: [
  ]
})
export class OrganizedComponent {

  isCapital: boolean = true;

  organizeBy: string = ""; 

  heroes: Heroe[] = [
    {
      name: "Spider-Man",
      fly: false,
      color: Color.red
    },
    {
      name: "Iron Man",
      fly: true,
      color: Color.red
    },
    {
      name: "Hulk",
      fly: false,
      color: Color.green
    },
    {
      name: "Thor",
      fly: true,
      color: Color.yellow
    }
  ]; 

  constructor() { }
  


  turnCapital(){
    //Change the isCapital to the value that is not
    this.isCapital = !this.isCapital;
  }

  changeOrder( value: string ) {
    this.organizeBy = value;
  }

}
