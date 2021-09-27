import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-organized',
  templateUrl: './organized.component.html',
  styles: [
  ]
})
export class OrganizedComponent implements OnInit {

  isCapital: boolean = true;

  constructor() { }
  
  ngOnInit(): void {
  }

  turnCapital(){
    //Change the isCapital to the value that is not
    this.isCapital = !this.isCapital;
  }

}
