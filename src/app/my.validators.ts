import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {
    static badEmail (control: FormControl): {[key: string]: boolean} {
       if (['bed@email.ru' , 'b@mail.ru'].includes(control.value)) {
           return {'badEmail': true};
       }
        return  null;
    }

    static uniqEm (control: FormControl): Promise<any> | Observable<any> {
        // 1 step
        const executor = (resolve) => {

            const handler = () => {
                if (control.value === 'aj@mail.ru') {
                    resolve({
                        uniqEm: true
                    });
                } else {
                    resolve (null);
                }
            };

            setTimeout( handler
            // 2
            , 1000);
        };

        // 2 step
        return new Promise(executor);
    }
 }
