import { Directive, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {
  // 取得參數
  @Input('appChangeColor') changedColor: string;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }
  ngAfterViewInit() {
    // 透過 nativeElement 直接操控樣式 (不佳)
    this.el.nativeElement.style.backgroundColor = this.changedColor;
  }

}
