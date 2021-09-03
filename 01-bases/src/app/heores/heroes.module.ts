import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';

@NgModule({
    //Which are the components
    declarations: [
        HeroeComponent,
        ListComponent
    ],
    //What is visible out of the module:
    exports: [
        HeroeComponent,
        ListComponent
    ],
    //imports are modules: objects that go inside the imports
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}