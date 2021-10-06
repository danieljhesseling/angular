import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
//import { MatDialog } from '@angular/material/dialog';
//import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
  img{ 
        width:90%; 
        border-radius: .4rem;
      }
  `
  ]
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id:'DC Comics',
      desc: 'DC-Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    publisher: Publisher.DCComics,
    alt_img: '',
    ego_img: '',
    first_appearance: '',
    characters: ''
  } 

  constructor( 
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    /*public dialog: MatDialog*/) {}

  ngOnInit(): void {

    if ( !this.router.url.includes('change')){
      return;
    }
    this.activatedRoute.params
      .pipe( 
        switchMap(({id}) => this.heroesService.getHeroesById(id))
        ).subscribe( heroe => this.heroe = heroe );
  }

  save(){
      if (this.heroe.superhero.trim().length === 0){
        return;
      }

      if (this.heroe.id) {
        //update in case there was an existing id
        this.heroesService.updateHeroe( this.heroe )
          .subscribe(heroe => console.log(heroe));
      } else {
        //create a new hero and navigate to the ui to edit
        this.heroesService.addHeroe( this.heroe )
          .subscribe(heroe => {
            this.router.navigate(['/heroes/change', heroe.id]);
          });
      }
  }

  delete() {

   /* const dialog = this.dialog.open( ConfirmComponent , {
      width: '10rem',
      data: this.heroe
    });*/

    /*dialog.afterClosed().subscribe(
      (result) => {
        if( result ){*/
          this.heroesService.deleteHeroe( this.heroe.id! )
            .subscribe( resp => {
              this.router.navigate(['/heroes']);
          });
        }
      }
   // )
  //}

//}
