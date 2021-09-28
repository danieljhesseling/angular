import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrganizedComponent } from './pages/organized/organized.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CapitalPipe } from './pipes/capital.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrganizePipe } from './pipes/organize.pipe';
import { ColorPipePipe } from './pipes/color-pipe.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    BasicsComponent,
    OrganizedComponent,

    CapitalPipe,
    FlyPipe,
    OrganizePipe,
    ColorPipePipe
  ],
  exports: [
    NumbersComponent,
    BasicsComponent,
    OrganizedComponent
  ],
  imports: [
    PrimeNgModule,
    CommonModule
  ]
})
export class SalesModule { }
