import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'capitalPipe' })

export class CapitalPipe implements PipeTransform {
    transform(value: string, isCapital: boolean = true): string {
        return ( isCapital ) 
            ? value.toUpperCase()
            : value.toLocaleLowerCase();
    }
}