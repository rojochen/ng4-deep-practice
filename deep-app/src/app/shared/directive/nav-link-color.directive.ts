import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appNavLinkColor]'
})
export class NavLinkColorDirective implements OnInit {
  @Input('appNavLinkColor') styleConfig: object; // 指定[appHighlight] 接收父傳來的值
  @Input() defaultColor: string; // 沒有指定將預設跑這一個取得父值
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }
  ngOnInit() {
    console.log('this.el.nativeElement: ', this.el.nativeElement);
    $(this.el.nativeElement).css(this.styleConfig);
  }

}
