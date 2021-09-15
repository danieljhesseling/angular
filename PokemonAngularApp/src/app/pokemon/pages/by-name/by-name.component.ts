import { Component } from '@angular/core';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styles: [
  ]
})
export class ByNameComponent {

  value: string = '';

  constructor() { }

  search() {
    console.log(this.value);
  }

}
