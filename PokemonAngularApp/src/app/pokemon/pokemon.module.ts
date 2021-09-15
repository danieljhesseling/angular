import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByNameComponent } from './pages/by-name/by-name.component';

import { ByTypeComponent } from './pages/by-type/by-type.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SeePokemonComponent } from './pages/see-pokemon/see-pokemon.component';
import { ByNumberComponent } from './pages/by-number/by-number.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ByNameComponent,
    ByNumberComponent,
    ByTypeComponent,
    ByRegionComponent,
    SeePokemonComponent
  ],
  exports: [
    ByNameComponent,
    ByNumberComponent,
    ByTypeComponent,
    ByRegionComponent,
    SeePokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PokemonModule { }
