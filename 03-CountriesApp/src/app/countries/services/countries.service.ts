import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/countries.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3'

  constructor( private http: HttpClient) { }

  searchCountry( value: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ value }`;

    return this.http.get<Country[]>( url );
  }

  searchCapital( value: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ value }`;

    return this.http.get<Country[]>( url );
  }

  searchContinent( value: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ value }`;

    return this.http.get<Country[]>( url );
  }

  getCountryByCode ( id: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>(url);
    }
  
}
