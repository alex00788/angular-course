import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NS {
    pole = 0
    metod1 () {
        this.pole++
    }
    metod2 () {
        this.pole--
    }
}