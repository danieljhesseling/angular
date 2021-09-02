import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  heroes: string[] = ['Spider-man', 'Iron-man', 'Hulk', 'Thor', 'Captain Marvel', 'Lobezno'];
  deletedHeroe: string = '';

  deleteHeroe() {
    this.deletedHeroe = this.heroes.pop() || '';
  }
}
