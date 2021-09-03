import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { DBZCharactersComponent } from './dbzcharacters/dbzcharacters.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    MainPageComponent,
    DBZCharactersComponent,
    AddComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
