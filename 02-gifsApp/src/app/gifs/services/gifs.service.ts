import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //Key from GIPHY
  private _apiKey: string = 'paqME9kXyKdcPOXoGXyWUTagvnN5BVKr'

  //Root of the web:
  private mainRoot: string = 'https://api.giphy.com/v1/gifs';

  //To save the searches
  private _history: string[] = [];

  //To save the results of the search
  public results: Gif[] = [];

  //Getter for the history
  get history() {
    return [...this._history];
  }

  //Constructor for HttpClient to make petitions
  constructor( private http: HttpClient ) {
    if( localStorage.getItem('history')) {
      //The last '!' is a way to make typescript "trust" you and don't show error in case that history is empty
      this._history = JSON.parse( localStorage.getItem('history')! );
    }

    //In case there is a last search, it will appear from the localstorage
    if( localStorage.getItem('results')) {
      this.results = JSON.parse( localStorage.getItem('results')! );
    }
  }

  searchGifs(query:string = ''){

    //To clean the value so it will not add to the history 'Hello ' and 'hello' for example.
    query = query.trim().toLocaleLowerCase();
    //To make it look in a correct way in the page, in sidebar.component.html we can use titlecase

    //In case query is NOT already in history (The search will be included)
    if( !this._history.includes(query)){
      this._history.unshift(query);

      //To only show 10 searches
      this._history = this._history.splice(0,10);

      //To save in the local the searches: setItem only accept two strings, to transform history to string: JSON
      localStorage.setItem('history', JSON.stringify( this._history ));
      //To restore the history: inside the http constructor (if)

    }

    /*
    //Request with a promise
    fetch('https://api.giphy.com/v1/gifs/search?api_key=paqME9kXyKdcPOXoGXyWUTagvnN5BVKr&q=dragon ball hot&limit=10')
    .then( resp => {
      resp.json().then(data => {
        console.log(data);
      })
    })*/


    //To clean the params that goes after the mainRoot:
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', 21)
      .set('q', query);

    //Request with http, <SearchGifsResponse> is to get the interface
    this.http.get<SearchGifsResponse>(`${ this.mainRoot }/search`, { params })
      .subscribe( ( resp ) => {
        //Save in result[] the data of resp
        this.results = resp.data;
        console.log(this.results);
        //Save in local the last search
        localStorage.setItem('results', JSON.stringify(this.results));
      })
  }

}
