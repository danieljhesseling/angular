import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [`
    mat-card {
      margin-top: 1rem;
      background-color:rgba(0,0,255,0.1);
    }
`]
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe!: Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}
