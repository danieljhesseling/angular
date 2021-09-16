import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  country!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe (
        // It will take the params from the path (:id)
        switchMap( ({ id }) => this.countriesService.getCountryByCode( id ) ), 
        tap(console.log)
      )
      .subscribe( country => this.country = country );
   }
}
