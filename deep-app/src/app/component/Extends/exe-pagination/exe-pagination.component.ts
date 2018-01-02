import { Component, Input, OnInit } from '@angular/core';

// get extends components
import { SimplePaginationComponent } from '../simple-pagination/simple-pagination.component';
@Component({
  selector: 'app-exe-pagination',
  templateUrl: './exe-pagination.component.html',
  styleUrls: ['./exe-pagination.component.css']
})
export class ExePaginationComponent extends SimplePaginationComponent {
  // @Input() previousText = '<<'; // override default text
  // @Input() nextText = '>>'; // override default text
  // @Input() title: string; // title input for child component only
  constructor() {
    // get parent func
    super();
    console.log(this);
  }


}
