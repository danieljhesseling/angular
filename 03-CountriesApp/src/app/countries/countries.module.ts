import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByContinentComponent } from './pages/by-continent/by-continent.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';


@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByContinentComponent,
    SeeCountryComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByContinentComponent,
    SeeCountryComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountriesModule { }
