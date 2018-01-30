import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-children-child',
  templateUrl: './view-children-child.component.html',
  styleUrls: ['./view-children-child.component.css']
})
export class ViewChildrenChildComponent implements OnInit {
  @Input() ok = 'OK';
  @Output() close = new EventEmitter<Boolean>();
  hidden: Boolean = true;
  constructor() { }

  ngOnInit() {
  }
  show() {
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
    this.close.emit(true);
  }

}
