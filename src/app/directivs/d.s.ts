import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDs]'
})
export class Ds {

    constructor(private perNel: ElementRef, private perRend: Renderer2) {
    }

    @HostListener ('mouseenter') metEnter () {
        this.perRend.setStyle(this.perNel.nativeElement, 'color', 'blue');
    }@HostListener ('mouseleave') metleave () {
        this.perRend.setStyle(this.perNel.nativeElement, 'color', null);
    }

}
