import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './Counter/counter.component';
import { HeroeComponent } from './heores/heroe/heroe.component';
import { ListComponent } from './heores/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
