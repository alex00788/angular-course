import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDirektiv]'
})
export class DirektivDirective {
    @Input('appDirektiv') color: string = ''
    @Input() fontWeight = 'normal'

    constructor(private per1: ElementRef, private per2: Renderer2 ) {
    }

    @HostListener('mouseenter') onEnter() {
        this.per2.setStyle(this.per1.nativeElement, 'color', this.color)
        this.per2.setStyle(this.per1.nativeElement, 'fontWeight', this.fontWeight)
    }
    @HostListener('mouseleave') onleave () {
        this.per2.setStyle(this.per1.nativeElement, 'color', null)
        this.per2.setStyle(this.per1.nativeElement, 'fontWeight', null)
    }
}
