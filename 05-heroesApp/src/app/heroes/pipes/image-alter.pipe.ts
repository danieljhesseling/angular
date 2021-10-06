import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/heroes.interface';

@Pipe({
  name: 'imageAlter'
})
export class ImageAlterPipe implements PipeTransform {


  transform(heroe: Heroe): string {

    if( !heroe.id && !heroe.ego_img){
      return 'assets/no-image.png';
    } else if ( heroe.ego_img){
      return heroe.ego_img;
    } else {
      return `assets/heroes/${heroe.id}-alterego.jpg`;
    }
  }
}
