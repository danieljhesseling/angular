import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByContinentComponent } from './pages/by-continent/by-continent.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByContinentComponent,
    SeeCountryComponent
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByContinentComponent,
    SeeCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CountriesModule { }
