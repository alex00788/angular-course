import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNd]'
})
export class NdDirective {

  @Input() set appNd (cond: boolean) {
    if (!cond) {
      this.perV.createEmbeddedView(this.perTem)
  //    показать
    } else {
    //  скрыть
      this.perV.clear()
    }
  }

  constructor(private perTem: TemplateRef<any>,
              private perV: ViewContainerRef) { }

}
