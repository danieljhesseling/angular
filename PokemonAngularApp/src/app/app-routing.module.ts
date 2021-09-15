import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByNameComponent } from './pokemon/pages/by-name/by-name.component';
import { ByRegionComponent } from './pokemon/pages/by-region/by-region.component';
import { ByTypeComponent } from './pokemon/pages/by-type/by-type.component';
import { SeePokemonComponent } from './pokemon/pages/see-pokemon/see-pokemon.component';
import { ByNumberComponent } from './pokemon/pages/by-number/by-number.component';

const routes: Routes = [
   //Principal route:
   {
    path: '',
    component: ByNameComponent,
    pathMatch: 'full'
  },
  // path: 'website/capital':
  {
    path: 'number',
    component: ByNumberComponent
  },
  {
    path: 'region',
    component: ByRegionComponent
  },
  {
    path: 'type',
    component: ByTypeComponent
  },
  // :id is to make it dinamic
  {
    path: 'pokemon/:pokemonName',
    component: SeePokemonComponent
  },
  // In case a route that doesn't exist is entered it will redirect to the principal:
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
