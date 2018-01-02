import { Component, Input, OnInit } from '@angular/core';

// get extends components
import { SimplePaginationComponent } from '../simple-pagination/simple-pagination.component';
@Component({
  selector: 'app-exe-pagination',
  templateUrl: './exe-pagination.component.html',
  styleUrls: ['./exe-pagination.component.css']
})
export class ExePaginationComponent extends SimplePaginationComponent {
  // nextText: string;
  // previousText: string;
  constructor() {
    // get parent func
    super();
  }
}
