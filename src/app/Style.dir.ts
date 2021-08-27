import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDir {
    constructor(private per1: ElementRef, private per2: Renderer2) {

    }
    @HostListener('click', ['$event']) onCli(tip: Event) {
        this.per2.setStyle(this.per1.nativeElement, 'color', 'blue')
    }
    @HostListener('mouseenter') onEnter () {
        this.per2.setStyle(this.per1.nativeElement, 'color', 'blue')
    }
    @HostListener('mouseleave') onLeave () {
        this.per2.setStyle(this.per1.nativeElement, 'color', 'red')
    }
}
