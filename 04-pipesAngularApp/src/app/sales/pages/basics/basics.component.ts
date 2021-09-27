import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = "daniel";
  nameUpper: string = "DANIEL";
  nameComplete: string = "daniel jiménez";

  date: Date = new Date();

}
