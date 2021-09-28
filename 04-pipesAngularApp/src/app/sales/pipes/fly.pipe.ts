import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'flyPipe' })

export class FlyPipe implements PipeTransform {
    transform(value: boolean): string {
        return  (value == true ? 'fly' : "doesn't fly");
    }
}