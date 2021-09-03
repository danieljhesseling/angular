import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { CounterComponent } from './Counter/counter.component';

@NgModule({
    //Which are the components
    declarations: [
        CounterComponent
    ],
    //What is visible out of the module:
    exports: [
        CounterComponent
    ],
    //imports are modules: objects that go inside the imports
    imports: [
        CommonModule
    ]
})
export class CounterModule {

}