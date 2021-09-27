import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { ByCapitalComponent } from './countries/pages/by-capital/by-capital.component';
import { ByContinentComponent } from './countries/pages/by-continent/by-continent.component';
import { SeeCountryComponent } from './countries/pages/see-country/see-country.component';

const routes: Routes = [
  //Principal route:
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full'
  },
  // path: 'website/capital':
  {
    path: 'capital',
    component: ByCapitalComponent
  },
  {
    path: 'continent',
    component: ByContinentComponent
  },
  // :id is to make it dinamic
  {
    path: 'alpha/:id',
    component: SeeCountryComponent
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
