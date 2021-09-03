import {FormControl} from '@angular/forms';

export class MyValidators {
    static bedEmail (control: FormControl) : {[key: string]: boolean}{
       if (['bed@email.ru' , 'b@mail.ru'].includes(control.value)) {
           return {'bedEmail':true}
       }
        return  null
    }
 }
