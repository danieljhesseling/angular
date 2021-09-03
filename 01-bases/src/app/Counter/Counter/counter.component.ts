import {Component} from '@angular/core'

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
})

export class CounterComponent {
  title: string = 'first-app';
  counterNumber: number = 0;

  controlCounter ( value: number ) {
    this.counterNumber += value;
  }
}