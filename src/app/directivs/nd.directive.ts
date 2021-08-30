import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appNd]'
})
export class NdDirective {

    constructor(
        private perTemp: TemplateRef<any>,
        private perVie: ViewContainerRef) {
    }

    @Input() set appNd (percond: boolean) {
      if (!percond) {
        this.perVie.createEmbeddedView(this.perTemp)
        // показ
      } else {
        this.perVie.clear()
      }
    }
}
