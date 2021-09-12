import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  //! No null 
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

  //To bring the services:
  constructor( private gifsService : GifsService) {}

  searchGif() {
    
    //value = the value of txtSearch
    const value = this.txtSearch.nativeElement.value;

    //If the value is null, then none will happen
    if (value.trim().length === 0) {
      return;
    }
    
    this.gifsService.searchGifs(value);
    //put txtSearch to ''
    this.txtSearch.nativeElement.value = '';
  }

  clear() {
    localStorage.clear();
  }

}
