import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '../interface/heroes.interface';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  private apiUrl: string = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.apiUrl }/heroes`);
  }

  getHeroesById( id:string ): Observable<Heroe> {
    const url = `${ this.apiUrl }/heroes/${ id }`;
    return this.http.get<Heroe>(url);
  }

  getHeroesBySuggestion( search: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.apiUrl }/heroes?q=${ search }&_limit=5`);
  }

  getHeroesByPublisher( search: string ): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.apiUrl }/heroes?q=${ search }`);
  }

  addHeroe ( heroe:Heroe ): Observable<Heroe>{
    return this.http.post<Heroe>(`${ this.apiUrl }/heroes`, heroe);
  }

  updateHeroe (heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${ this.apiUrl }/heroes/${heroe.id}`, heroe);
  }
  
  deleteHeroe ( id: string ): Observable<any>{
    return this.http.delete<any>(`${ this.apiUrl }/heroes/${id}`);
  }
}
