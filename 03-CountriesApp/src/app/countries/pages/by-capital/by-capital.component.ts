import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interfaces';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  value: string = "";
  //To handle errors
  isError: boolean = false;

  countries: Country[] = [];

  constructor( private countriesService: CountriesService) { }

  search( value:string ) {
    this.isError = false;
    this.value = value;

    this.countriesService.searchCapital( this.value )
      .subscribe( countries => {
        console.log(countries);
        this.countries = countries; 
      }, (err) => {
        this.isError = true;

        //In case of error, countries will be an empty array
        this.countries = [];
      })
  }

  sugerences (value:string ) {
    this.isError = false;
    console.log(value);
  }

}
