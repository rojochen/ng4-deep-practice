import { Component, Input, OnInit } from '@angular/core';

// get extends components
import { SimplePaginationComponent } from '../simple-pagination/simple-pagination.component';
@Component({
  selector: 'app-exe-pagination',
  templateUrl: './exe-pagination.component.html',
  styleUrls: ['./exe-pagination.component.css']
})
export class ExePaginationComponent extends SimplePaginationComponent {
  @Input() previousText: string = '<<'; // 覆寫預設值
  @Input() nextText: string = '>>'; // 覆寫預設值
  @Input() title: string; // title input只有子元件才有
  constructor() {
    // get parent func
    super();
  }
}
