import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/countries.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2'

  constructor( private http: HttpClient) { }

  searchCountry( value: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ value }`;

    return this.http.get<Country[]>( url );
  }
}
