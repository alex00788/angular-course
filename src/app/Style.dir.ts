import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDir {
    @Input('appStyle') color: string = 'blue'
    constructor(private per1: ElementRef, private per2: Renderer2) {

    }
    @HostListener('click', ['$event']) onCli(tip: Event) {
        this.per2.setStyle(this.per1.nativeElement, 'color', this.color)
    }
    @HostListener('mouseenter') onEnter () {
        this.per2.setStyle(this.per1.nativeElement, 'color', this.color)
    }
    @HostListener('mouseleave') onLeave () {
        this.per2.setStyle(this.per1.nativeElement, 'color', null)
    }
}
