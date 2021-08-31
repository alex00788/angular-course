import { Pipe, PipeTransform } from '@angular/core';
import {Spis} from '../app.component';

@Pipe({
  name: 'filterrr',
  pure: false
})
export class FilterrrPipe implements PipeTransform {

  transform(perP: Spis[], strPoisk: string = ''): Spis [] {
    if (!strPoisk.trim()) {
      return perP
    }
    return perP.filter( newMas => {
      return newMas.surname.toLocaleLowerCase().includes(strPoisk.toLocaleLowerCase())
      ||
          newMas.name.toLocaleLowerCase().includes(strPoisk.toLocaleLowerCase())
    });
  }

}

