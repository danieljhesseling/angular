import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); 
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  value: string = "";

  // This will create the action each time the component its created
  ngOnInit() {
    this.debouncer
    .pipe( 
      //How many ms do you want to wait util suscribe is used
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebounce.emit(value);
    });
  }

  search() {
    this.onEnter.emit( this.value );
  }

  pressedKey () {
    //The next is suscribed in ngOnInit()
    this.debouncer.next (this.value);
  }

}
