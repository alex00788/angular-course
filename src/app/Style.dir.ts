import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDir {
    constructor(private per: ElementRef, private perT: Renderer2) {
        this.perT.setStyle(this.per.nativeElement, 'color', 'blue')
    }
}
