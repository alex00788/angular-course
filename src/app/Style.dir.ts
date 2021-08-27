import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDir {
    @Input('appStyle') color: string = 'blue'
    @Input() fontWeight = 'normal'


    constructor(private per1: ElementRef, private per2: Renderer2) {

    }
    @HostListener('mouseenter') onEnter () {
        this.per2.setStyle(this.per1.nativeElement, 'color', this.color)
        this.per2.setStyle(this.per1.nativeElement, 'fontWeight', this.fontWeight)
    }
    @HostListener('mouseleave') onLeave () {
        this.per2.setStyle(this.per1.nativeElement, 'color', 'blue')
        this.per2.setStyle(this.per1.nativeElement, 'fontWeight', null)
    }
}
