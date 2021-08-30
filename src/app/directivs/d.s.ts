import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDs]'
})
export class Ds {

    @Input ('appDs') color = 'yellow'
    @Input () per:  {border?: string, fontWeight?: string }

    constructor(private perNel: ElementRef, private perRend: Renderer2) {
    }
    @HostListener('mouseenter') metEnter () {
        this.perRend.setStyle(this.perNel.nativeElement, 'color', this.color);
        this.perRend.setStyle(this.perNel.nativeElement, 'border', this.per.border);
        this.perRend.setStyle(this.perNel.nativeElement, 'fontWeight', this.per.fontWeight);
    }@HostListener('mouseleave') metLeave () {
        this.perRend.setStyle(this.perNel.nativeElement, 'color', null);
        this.perRend.setStyle(this.perNel.nativeElement, 'border', null);
        this.perRend.setStyle(this.perNel.nativeElement, 'fontWeight', null);
    }
}
