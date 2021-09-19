import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interfaces';

@Component({
  selector: 'app-by-continent',
  templateUrl: './by-continent.component.html',
  styles: [
  ]
})
export class ByContinentComponent {

  continents: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  continentActive: string = '';

  value: string = "";
  //To handle errors
  isError: boolean = false;

  countries: Country[] = [];

  constructor( private countriesService: CountriesService) { }

  activateContinent (continent: string) {
    this.continentActive = continent;

    this.countriesService.searchContinent( continent )
      .subscribe( countries => {
        console.log(countries);
        this.countries = countries; 
      }, (err) => {
        this.isError = true;

        //In case of error, countries will be an empty array
        this.countries = [];
      })  
  }
}
