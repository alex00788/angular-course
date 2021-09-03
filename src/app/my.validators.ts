import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {
    static bedEmail (control: FormControl) : {[key: string]: boolean}{
       if (['bed@email.ru' , 'b@mail.ru'].includes(control.value)) {
           return {'bedEmail':true}
       }
        return  null
    }

    static uniqEm (control: FormControl) : Promise<any> | Observable<any> {
        return new Promise(resolve => {
            setTimeout( () => {
                if (control.value === 'aj@mail.ru') {
                    resolve ({
                        uniqEm: true })
                } else {
                    resolve: null
                }
            }, 1000)
        })
    }
 }
