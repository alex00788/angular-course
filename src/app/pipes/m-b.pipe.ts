import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'mult'
})
export class MBPipe implements PipeTransform{
transform(numm: number, par: number=2): number {
   return  numm * par
}
}
