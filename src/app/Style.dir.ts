import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDir {
    constructor(private per: ElementRef,) {
    per.nativeElement.style.color = 'red'
    }
}
