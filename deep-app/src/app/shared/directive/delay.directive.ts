import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  @Input() set appDelay(time: number) {
    setTimeout(() => {
      // viewContainerRef建立裝 embeded view的容器, templateRef創造 embeded view
      console.log(this.templateRef);
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, time);
  }
}
