import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/sales.interface';

@Pipe({
  name: 'colorPipe'
})
export class ColorPipePipe implements PipeTransform {

  transform(value: Color): unknown {

    switch( value ) {

    case 0:
      return "black";

    case 1:
      return "white";
    
    case 2: 
      return "red";
    
    case 3:
      return "yellow"

    default:
      return "green"
  }
}

}
