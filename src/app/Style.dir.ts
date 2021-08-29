import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDir {
    @Input('appStyle') color: string = 'blue'
    @Input() dSt : {border?: string, fontWeight?: string, borderRadius?: string}

    @HostBinding('style.color') perColor = null

    constructor(private per1: ElementRef, private per2: Renderer2) {

    }
    @HostListener('mouseenter') onEnter () {
        this.perColor = this.color
        // this.per2.setStyle(this.per1.nativeElement, 'color', this.color)
        // this.per2.setStyle(this.per1.nativeElement, 'fontWeight', this.dSt)
        // this.per2.setStyle(this.per1.nativeElement, 'border', this.dSt.border)
        // this.per2.setStyle(this.per1.nativeElement, 'borderRadius', this.dSt.borderRadius)
    }
    @HostListener('mouseleave') onLeave () {
        this.perColor = null
        // this.per2.setStyle(this.per1.nativeElement, 'color', 'blue')
        // this.per2.setStyle(this.per1.nativeElement, 'fontWeight', null)
        // this.per2.setStyle(this.per1.nativeElement, 'border', null)
        // this.per2.setStyle(this.per1.nativeElement, 'borderRadius', null)
    }
}
