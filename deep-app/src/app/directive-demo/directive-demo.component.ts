import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent {

  colorCode = '#97f8f8';
  arrayList: any[] = [1, 2, 3, 4, 5, 6];
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  rerun() {
    this.arrayList = [];
    setTimeout(() => {
      this.arrayList = [1, 2, 3, 4, 5, 6];
    }, 200);
  }

  changeSpanColor() {
    // 透過renderer當中間層, 不直接操作DOM元素
    this.renderer.setStyle(this.el.nativeElement.querySelector('.balabala'), 'background-color', '#e5f796');
  }
    // 透過renderer當中間層, 不直接操作DOM元素
  resetColor() {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.balabala'), 'background-color', this.colorCode);
  }

}
