import {Injectable} from '@angular/core';
import {LogggService} from './loggg.service';

@Injectable({
    providedIn: 'root'
})
export class NS {
    pole = 0

    constructor(private logggServ: LogggService) {
    }

    metod1 () {
        this.logggServ.log('plus')
        this.pole++
    }
    metod2 () {
        this.logggServ.log('minus')
        this.pole--
    }
}
