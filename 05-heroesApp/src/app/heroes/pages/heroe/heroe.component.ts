import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interface/heroes.interface';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  
  img{ 
        max-width:50%; 
        margin: 1rem;
        border-radius: .4rem;
      },
    
    mat-card-title{
      margin-top: 1rem;
    },
    mat-card{
      margin-top: 1rem;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;
 
  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroesService.getHeroesById( id )),
        tap(console.log)
      ) 
      .subscribe( heroe => this.heroe = heroe);
  }

}
