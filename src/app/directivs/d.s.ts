import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDs]'
})
export class Ds {

    constructor(private perNel: ElementRef, private perRend: Renderer2) {
        this.perRend.setStyle(this.perNel.nativeElement, 'color', 'orange');
        this.perRend.setStyle(this.perNel.nativeElement, 'fontWeight', 'bold')
        this.perRend.setStyle(this.perNel.nativeElement, 'font-size', '150px')
    }
}
