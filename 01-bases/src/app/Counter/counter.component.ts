import {Component} from '@angular/core'

@Component({
    selector: 'app-counter',
    template: `
        <h1> {{ title }}</h1>
        <!-- The title is saved in "/app/app.component.ts"-->

        <h2> Counter: </h2>

        <button (click) = "controlCounter ( -10 ) "> - 10</button>
        <button (click) = "controlCounter ( -5 ) "> - 5</button>
        <button (click) = "controlCounter( -1 )"> -1 </button> 
        <span> {{counterNumber}} </span>
        <button (click) = "controlCounter ( +1 )"> +1 </button>
        <button (click) = "controlCounter ( +5 ) "> + 5</button> 
        <button (click) = "controlCounter ( +10 ) "> + 10</button>
    `
})

export class CounterComponent {
  title: string = 'first-app';
  counterNumber: number = 0;

  controlCounter ( value: number ) {
    this.counterNumber += value;
  }
}