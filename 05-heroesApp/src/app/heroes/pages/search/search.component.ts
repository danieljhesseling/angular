import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`
  .btn-filter{
    margin: 1rem 1rem 1.5rem 1.5rem;
  }
  `]
})
export class SearchComponent implements OnInit {

  value: string = '';
  heroes: Heroe[] = [];
  selectedHeroe: Heroe | undefined;

  /* For the filter
  selectedHeroes: Heroe[] | undefined;
  publisher: string [] = ['DC', 'Marvel'];
  publisherActive: string = '';

   //To handle errors
   isError: boolean = false;
   */

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searching() {
    this.heroesService.getHeroesBySuggestion( this.value.trim() )
      .subscribe( heroes => this.heroes = heroes );
  }

  selected( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
			this.selectedHeroe = undefined;
			return;
		}

    const heroe: Heroe = event.option.value;
    this.value = heroe.superhero;

    this.heroesService.getHeroesById( heroe.id! )
      .subscribe( heroe => this.selectedHeroe = heroe);
  }

  /* For the filter
  activatedPublisher ( publisher: string) {
    this.publisherActive = publisher;

    this.heroesService.getHeroesByPublisher( publisher )
      .subscribe( heroes => {
        console.log(heroes);
        this.heroes = heroes; 
      }, (err) => {
        this.isError = true;

        //In case of error, countries will be an empty array
        this.heroes = [];
      })  
  }*/
}
