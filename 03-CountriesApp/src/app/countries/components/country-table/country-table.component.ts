import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interfaces';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent implements OnInit {

  @Input() countries: Country[] = []; 

  constructor( private countriesService: CountriesService) { }
  
  ngOnInit(): void {
  }

}
